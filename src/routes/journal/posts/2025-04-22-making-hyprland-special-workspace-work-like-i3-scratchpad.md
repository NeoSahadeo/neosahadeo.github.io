---
published: true
date: 2025-04-22
title: Making Hyprland Special Workspace work like i3 Scratchpad
tags:
  - fix
  - hyprland
---
TLDR;

```
bind = $altMod, grave, exec, rofi -show window; hyprctl dispatch movetoworkspace +0
```

So I recently switched from i3 to Sway, then from Sway to Hyprland. I've been loving the animations and the polished feel compared to Sway and i3. And the performance benefit from x11 to Wayland is honestly - crazy.  
  
The above command runs the rofi window for running applications then uses the [hyprctl dispatch](https://wiki.hyprland.org/Configuring/Dispatchers/) to move the currently open window to the current workspace (0+0 is still 0).  
  
There are other commands that we could daisy-chain but this works pretty much exactly like i3's scratchpad.