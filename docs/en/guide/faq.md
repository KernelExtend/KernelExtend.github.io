# Frequently Asked Questions (FAQ)

Common questions and troubleshooting guides for KernelEX.

---

### Q1: Why do `top`, `htop`, or `vim` look broken in the terminal?
**A**: KernelEX is a pipe-based GUI executor (`stdin` / `stdout` / `stderr` redirection) rather than a full PTY (pseudo-terminal) emulator. Full-screen ncurses applications that require cursor repositioning cannot render properly. KernelEX is optimized for automation scripts, background daemons, and system module flashing.

---

### Q2: Why are binary programs named `.so`?
**A**: In Android environments, executable binary permissions are restricted. Naming ELF executables with `.so` is a widely adopted convention across Magisk modules and rooting tools. KernelEX executes `.so` files directly with automatic `chmod 777`.

---

### Q3: Why does my background script get killed by the OS?
**A**:
1. Go to "Settings" or the Permission Gate and tap **"Request Ignore Battery Optimization"** to add KernelEX to the battery whitelist.
2. In customized OEM skins (HyperOS, OriginOS, ColorOS), remember to **lock** KernelEX in the recent tasks overview and allow auto-start permissions.

---

### Q4: How do I restore the default font?
**A**: Open the "Settings" tab, locate the "Custom Font" card, tap the gear icon, and tap **"Restore Default Font"** to instantly reset to the built-in typeface.

---

### Q5: What is the purpose of "Independent Folder Storage"?
**A**: When multiple scripts contain companion files with identical names (like `config.json`), putting them all into `/data/adb/KernelEX/` would cause overwrites. Independent folders isolate each script into its own `[name]_[timestamp]` subdirectory.
