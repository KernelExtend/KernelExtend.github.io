# Quick Start

Welcome to **KernelEX**! This guide will walk you through the system requirements, permission setup, and how to execute your very first script.

---

## 📱 System Requirements

Before getting started, please ensure your Android device meets the following requirements:

- **Operating System**: Android 8.0 (API 26) or higher
- **CPU Architecture**: `arm64-v8a`, `armeabi-v7a`, `x86_64`
- **ROOT Solution**: **Magisk**, **KernelSU**, or **APatch** installed and active
- **Storage Permission**: All-files access permission required on Android 11+ to manage external scripts

---

## 🔑 Permission Setup

When launching KernelEX for the first time, you will be greeted by the **Permission Gate**:

1. **ROOT Superuser Permission**: Tap "Request ROOT Access" and grant permanent superuser privileges in your manager (Magisk / KernelSU / APatch).
2. **All-Files Access**: Navigate to system settings to enable all-files management so KernelEX can load scripts from external storage.
3. **Ignore Battery Optimization (Recommended)**: Request exclusion from battery optimization to prevent background script terminations.

::: tip Automatic Transition
Once all required permissions are granted, KernelEX will automatically transition to the main interface.
:::

---

## 🚀 Executing Your First Script

KernelEX offers three flexible execution workflows:

### Method 1: Home Path Input / Picker
1. Go to the **Home** tab at the bottom;
2. Type in an absolute path or tap **"Pick from File Manager"** to select a `.sh` or `.so` file;
3. Tap **"Execute Now"**, and KernelEX will switch to the **Terminal** tab with live log streaming.

### Method 2: Workspace Directory Launch
1. Place scripts or binaries directly into `/data/adb/KernelEX/`;
2. On the **Home** tab, click on any file in the workspace list to select and run it.

### Method 3: File Manager Context Action
1. Go to the **Files** tab;
2. Navigate to your script, long-press the file item to open the action menu;
3. Select **"Add to KernelEX"** (if "Auto Execute" is enabled in Settings, it starts immediately).

---

## 💻 Terminal Controls & Interaction

In the **Terminal** tab, you can:

- **Send Standard Input (stdin)**: Type parameters or responses in the bottom input bar and tap Send or Enter.
- **Send Interrupt (Ctrl+C)**: Tap **"Interrupt"** to dispatch a `SIGINT` (`kill -2`) signal to the active process.
- **Force Kill**: Tap **"Kill Process"** to terminate stuck tasks (`kill -9`).
- **Copy Logs**: Tap **"Copy Output"** to copy plain-text console logs to your clipboard.
- **Clear & Rerun**: Tap **"Clear"** to reset the console or **"Rerun"** to restart the last task.
