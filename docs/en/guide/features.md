# Core Features

Designed specifically for Android geeks and script authors, KernelEX combines execution streaming, memory protection, full-disk file management, and customizable UI aesthetics.

---

## ⚡ 1. Dual-Mode Native Execution & Environment Injection

- **Supported Formats**: Native execution for Linux Shell scripts (`.sh`) and ELF binaries (`.so`).
- **Standard Linux Environment**: Automatically pre-configures essential paths before execution:
  ```bash
  export PATH=/sbin:/system/sbin:/system/bin:/system/xbin:$PATH
  export TERM=xterm-256color
  export LANG=en_US.UTF-8
  ```
- **Automated Permissions**: Automatically runs `chmod 777` prior to execution to avoid permission denied errors.
- **Process Tracking**: Accurately tracks native process PIDs and captures return exit codes.

---

## 🌊 2. 16ms Batch Flow & Sliding Window Memory Safety

- **16ms Frame-Synced Debouncing**: High-volume log outputs are queued and flushed at 16ms intervals (~60 FPS), eliminating Compose UI lag and freezing.
- **Sliding Window Protection**: Limits console log buffer to 250,000 characters. Automatically prunes at newline boundaries to retain the latest 180,000 characters, preventing memory leaks and OOM crashes.
- **ANSI Color Parsing**: Built-in state machine parses standard 16-color ANSI escape sequences and bold styles.

---

## 📁 3. Full-Disk ROOT File Manager

- **Direct Workspace**: Defaults to `/data/adb/KernelEX`, fully compatible with Magisk / KernelSU / APatch workflows.
- **Isolated Timestamped Folders**: When enabled, scripts are copied into isolated subdirectories (`[name]_[timestamp]`), avoiding file overwrite conflicts.
- **Live Font Preview & Hot-Swapping**: Tap any `.ttf` or `.otf` file in the file manager to preview typography and apply it globally with one tap.
- **Injection Defense**: All Shell paths are safely escaped with single quotes (`replace("'", "'\\''")`), with path traversal checks for `..` and special separators.

---

## 🎨 4. MIUIX Aesthetics & Customization

- **Dual Themes**: Switch seamlessly between **MIUIX (HyperOS glassmorphism)** and **Material 3**.
- **Floating Dock Bar**: Optional floating pill-style dock bar with smooth Spring animations.
- **HSV Color Wheel**: 16 geeky color presets plus a full Hue and Brightness slider for complete terminal personalization.
