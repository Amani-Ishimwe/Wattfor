"use client";

import React, { useEffect, useRef } from "react";

interface CircuitBgProps {
  opacity?: number;
  color?: "light" | "dark";
}

export default function CircuitBg({
  opacity = 0.06,
  color = "light",
}: CircuitBgProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Color definitions
    const dotColor = color === "light" ? "21, 34, 56" : "243, 242, 238"; // navy or off-white
    const lineIndexColor = color === "light" ? "21, 34, 56" : "243, 242, 238";
    const pulseColor = "#C9722C"; // Copper accent

    // Grid configuration
    const spacing = 50; // Grid cell size
    let cols = Math.ceil(width / spacing);
    let rows = Math.ceil(height / spacing);

    // Resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      cols = Math.ceil(width / spacing);
      rows = Math.ceil(height / spacing);
      generateStaticTraces();
    };
    window.addEventListener("resize", handleResize);

    // Wire traces (static layouts)
    interface Trace {
      points: { x: number; y: number }[];
      dash: number[];
    }
    let traces: Trace[] = [];

    const generateStaticTraces = () => {
      traces = [];
      const numTraces = Math.min(25, Math.ceil((cols * rows) / 10));

      for (let i = 0; i < numTraces; i++) {
        const points: { x: number; y: number }[] = [];
        let curCol = Math.floor(Math.random() * cols);
        let curRow = Math.floor(Math.random() * rows);
        points.push({ x: curCol * spacing, y: curRow * spacing });

        // Add 2-3 random segments along grid lines
        const segments = Math.floor(Math.random() * 2) + 2;
        for (let s = 0; s < segments; s++) {
          const dir = Math.random() > 0.5 ? "h" : "v";
          const dist = (Math.floor(Math.random() * 4) + 2) * (Math.random() > 0.5 ? 1 : -1);

          if (dir === "h") {
            curCol = Math.max(0, Math.min(cols, curCol + dist));
          } else {
            curRow = Math.max(0, Math.min(rows, curRow + dist));
          }
          points.push({ x: curCol * spacing, y: curRow * spacing });
        }

        // Random dashed patterns
        const dashPatterns = [
          [4, 8],
          [2, 4],
          [5, 5],
          [10, 10],
        ];
        const dash = dashPatterns[Math.floor(Math.random() * dashPatterns.length)];

        traces.push({ points, dash });
      }
    };

    generateStaticTraces();

    // Pulse animations (active electric pulses flowing through tracks)
    interface Pulse {
      x: number;
      y: number;
      targetIdx: number;
      points: { x: number; y: number }[];
      progress: number;
      speed: number;
      width: number;
    }
    const pulses: Pulse[] = [];
    const maxPulses = 6;

    const spawnPulse = (): Pulse | null => {
      if (traces.length === 0) return null;
      // Pick a random trace
      const trace = traces[Math.floor(Math.random() * traces.length)];
      if (trace.points.length < 2) return null;

      // Start pulse from first node
      return {
        x: trace.points[0].x,
        y: trace.points[0].y,
        targetIdx: 1,
        points: trace.points,
        progress: 0,
        speed: 0.02 + Math.random() * 0.03, // animation speed factor
        width: Math.random() * 2 + 1.5,
      };
    };

    // Pre-fill some pulses
    for (let i = 0; i < maxPulses; i++) {
      const p = spawnPulse();
      if (p) {
        p.progress = Math.random(); // distribute along tracks
        pulses.push(p);
      }
    }

    // Animation Loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Grid points (subtle background points)
      ctx.fillStyle = `rgba(${dotColor}, 0.25)`;
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          ctx.beginPath();
          ctx.arc(c * spacing, r * spacing, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 2. Draw static traces (circuit wires)
      ctx.lineWidth = 1;
      ctx.strokeStyle = `rgba(${lineIndexColor}, 0.12)`;
      traces.forEach((trace) => {
        ctx.beginPath();
        ctx.setLineDash(trace.dash);
        ctx.moveTo(trace.points[0].x, trace.points[0].y);
        for (let i = 1; i < trace.points.length; i++) {
          ctx.lineTo(trace.points[i].x, trace.points[i].y);
        }
        ctx.stroke();
      });
      ctx.setLineDash([]); // reset line dash

      // 3. Update & Draw Pulses (electric signals)
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        const startPoint = p.points[p.targetIdx - 1];
        const endPoint = p.points[p.targetIdx];

        if (!startPoint || !endPoint) {
          pulses.splice(i, 1);
          continue;
        }

        // Interpolate position
        p.x = startPoint.x + (endPoint.x - startPoint.x) * p.progress;
        p.y = startPoint.y + (endPoint.y - startPoint.y) * p.progress;

        // Progress update
        p.progress += p.speed;

        // Draw pulse dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.width, 0, Math.PI * 2);
        ctx.fillStyle = pulseColor;
        ctx.shadowColor = pulseColor;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow

        // Check if segment is finished
        if (p.progress >= 1) {
          if (p.targetIdx + 1 < p.points.length) {
            p.targetIdx += 1;
            p.progress = 0;
          } else {
            // Reached the end, remove and spawn a new one
            pulses.splice(i, 1);
          }
        }
      }

      // Maintain active pulse count
      while (pulses.length < maxPulses) {
        const p = spawnPulse();
        if (p) pulses.push(p);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300"
      style={{ opacity }}
    />
  );
}
