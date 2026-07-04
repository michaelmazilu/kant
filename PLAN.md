# Kant Project Plan

## Goal

Build a low-latency monocular video system that estimates a drone's 3D position and velocity from ordinary single-camera footage.

## Technical Direction

Primary path:

1. Ingest video.
2. Detect and track the drone in 2D.
3. Estimate range with a drone-specific monocular model.
4. Back-project bearing plus range through camera intrinsics.
5. Smooth camera-relative 3D position and velocity with an uncertainty-aware EKF or UKF.

Optional path:

1. Run monocular SLAM on the background when the scene supports it.
2. Transform camera-relative drone estimates into world coordinates.
3. Gate world-frame output by SLAM confidence.

## MVP Scope

Start with the smallest useful surface:

1. Frontend video ingestion UI.
2. No post-processing.
3. No backend upload API until the processing path exists.
4. No SLAM until camera-relative tracking is benchmarked.

## Architecture Priorities

1. Camera-relative 3D output comes first.
2. SLAM is a world-coordinate layer, not the main ranging method.
3. Range estimates must carry uncertainty.
4. Tracking and filtering must degrade gracefully when detections, range, or SLAM are weak.
5. Benchmark Tier 0 and Tier 1 separately.

## Near-Term Steps

1. Create the video ingestion frontend.
2. Add a backend endpoint only when there is a real processing consumer.
3. Add detector/tracker prototype.
4. Add learned range estimation.
5. Add camera-frame EKF smoothing.
6. Benchmark latency, tracking loss, range error, and 3D error.

## Explicit Non-Goals For Now

1. No video post-processing in the first frontend.
2. No custom upload abstraction before a backend exists.
3. No SLAM-first implementation.
4. No speculative pipeline UI for features that are not built.
