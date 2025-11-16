// PullRope.jsx
import React, { useEffect, useRef, useState } from "react";
import "./Professional.css";

// ⬅️ Import your Navbar
import Navbar from "../navbar/Navbar";

export default function Professional({
  text = "Pull the rope to switch the light on.",
  keepOnThreshold = 0.55,
}) {
  const rootRef = useRef(null);
  const handleRef = useRef(null);
  const ropeRef = useRef(null);
  const glowRef = useRef(null);
  const groundRef = useRef(null);

  const maxPullRef = useRef(Math.min(window.innerHeight * 0.45, 420));
  const draggingRef = useRef(false);
  const startYRef = useRef(0);

  const [pull, setPull] = useState(0);

  // ------------ (Rest of your existing rope logic stays the same) ------------
  function applyFromPull(p) {
    const baseSpotY = 6;
    const spotY = baseSpotY + p * 18;
    const spotX = 50;
    const spotSize = 90 + p * 700;
    const intensity = Math.min(1, p * 1.3);

    const root = rootRef.current;
    if (!root) return;
    root.style.setProperty("--spot-x", `${spotX}%`);
    root.style.setProperty("--spot-y", `${spotY}%`);
    root.style.setProperty("--spot-size", `${spotSize}px`);
    root.style.setProperty("--intensity", `${intensity}`);

    if (glowRef.current) {
      glowRef.current.style.left = `${spotX}%`;
      glowRef.current.style.top = `${(spotY / 100) * window.innerHeight}px`;
      glowRef.current.style.width = `${spotSize}px`;
      glowRef.current.style.height = `${spotSize}px`;
      glowRef.current.style.opacity = `${intensity}`;
    }

    if (groundRef.current) {
      groundRef.current.style.width = `${Math.max(200, 240 + p * 800)}px`;
      groundRef.current.style.height = `${Math.max(40, 40 + p * 180)}px`;
      groundRef.current.style.opacity = `${intensity * 0.7}`;
      groundRef.current.style.transform = `translateX(-50%) translateY(${p * 8}px) scale(${0.9 + p * 0.2})`;
    }

    if (ropeRef.current)
      ropeRef.current.style.transform = `rotate(${(p * 6) - 3}deg)`;
  }

  useEffect(() => applyFromPull(pull), [pull]);

  useEffect(() => {
    function onResize() {
      maxPullRef.current = Math.min(window.innerHeight * 0.45, 420);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function startDrag(clientY) {
    draggingRef.current = true;
    startYRef.current = clientY;
    document.documentElement.style.cursor = "grabbing";
  }

  function moveDrag(clientY) {
    if (!draggingRef.current) return;
    const delta = clientY - startYRef.current;
    const pulledPx = Math.max(0, Math.min(delta, maxPullRef.current));
    const p = pulledPx / maxPullRef.current;
    setPull(p);

    if (handleRef.current)
      handleRef.current.style.transform = `translate(-50%, -50%) translateY(${pulledPx}px)`;

    if (rootRef.current) {
      const ropeYpx = (18 / 100) * window.innerHeight + pulledPx;
      rootRef.current.style.setProperty("--rope-y", `${ropeYpx}px`);
    }
  }

  function endDrag() {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    document.documentElement.style.cursor = "";
    if (pull >= keepOnThreshold) animateTo(1, 220);
    else animateTo(0, 350);
  }

  function animateTo(target, dur = 240) {
    const start = pull;
    const diff = target - start;
    const t0 = performance.now();

    function step(now) {
      const t = Math.max(0, Math.min(1, (now - t0) / dur));
      const ease = 1 - Math.pow(1 - t, 3);
      const cur = start + diff * ease;
      setPull(cur);

      const pulledPx = cur * maxPullRef.current;
      if (handleRef.current)
        handleRef.current.style.transform = `translate(-50%, -50%) translateY(${pulledPx}px)`;

      if (rootRef.current) {
        const ropeYpx = (18 / 100) * window.innerHeight + pulledPx;
        rootRef.current.style.setProperty("--rope-y", `${ropeYpx}px`);
      }

      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  useEffect(() => {
    const h = handleRef.current;
    if (!h) return;

    function onPointerDown(e) {
      e.preventDefault();
      if (h.setPointerCapture) h.setPointerCapture(e.pointerId);
      startDrag(e.clientY);
    }

    function onPointerMove(e) {
      if (!draggingRef.current) return;
      moveDrag(e.clientY);
    }

    function onPointerUp(e) {
      try { if (h.releasePointerCapture) h.releasePointerCapture(e.pointerId); } catch { }
      endDrag();
    }

    h.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      h.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [pull]);

  return (
    <>
      {/* HERE IS YOUR NAVBAR */}
      <Navbar />

      {/* Rope + spotlight area */}
      <div
        ref={rootRef}
        className="pull-rope-root"
        style={{
          "--rope-y": "18vh",
          "--spot-x": "50%",
          "--spot-y": "6%",
          "--spot-size": "0px",
          "--intensity": "0",
        }}
      >
        <div className="rope-wrap">
          <div ref={ropeRef} className="rope" />
          <button ref={handleRef} className="handle" aria-label="Pull the rope">
            <svg width="28" height="28" viewBox="0 0 24 24">
              <circle r="2" fill="rgba(0,0,0,0.06)" />
              <rect x="10" y="11" width="4" height="7" rx="1.5" fill="rgba(0,0,0,0.08)" />
            </svg>
          </button>

          <div ref={glowRef} className="glow" />
        </div>

        <div className="spot-cone" />

        <div ref={groundRef} className="ground-reflection" />

        <div className="text-area">
          <div className="reveal-text">{text}</div>
          <div className="hint">(Pull the rope to reveal the light)</div>
        </div>
      </div>
    </>
  );
}
