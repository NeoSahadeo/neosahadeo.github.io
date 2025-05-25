---
published: true
date: 2025-05-17
title: Creating Plugins for Sextant
tags:
  - sextant
  - discord
  - mods
---
# What is Sextant

Sextant is my Discord Electron Wrapper around Discord Web to provide a more optimised, privacy focused, and enhanced streaming to the base Discord experience.

I have every intention of writing a documentation resource; but for the time-being, this will work for now!

# Understanding the Folder Structure

This is a representation as of 17/05/2025. There will be new files and content but the structure should not change.

```
src
├── components
│   ├── settingsTab.html
│   └── settingsTab.ts
├── electrons
│   ├── externalConfig.ts
│   └── tray_icon.ts
├── patches
│   ├── blockDomain.ts
│   ├── disableCSP.ts
│   ├── onBeforeRequest.ts
│   ├── requestLimit.ts
│   └── stream.ts
├── plugins
│   ├── betterStream.ts
│   ├── dispatcher.ts
│   ├── dynamicStyles.ts
│   ├── fileLoader.ts
│   ├── reduceDOMSize.ts
│   ├── settingsTab.ts
│   └── stopPropagation.ts
├── global.d.ts
├── main.ts
├── pluginManager.ts
├── preload.js
└── utils.ts
static
└── styles
    ├── config.toml
    ├── settings.toml
    ├── sextant.png
    └── tray_icon.png
```

Right, the folders you should be interested in is, components and plugins. Generally patches are very limited in extension functionality - hence the word patch - and you will most likely not really want to right a patch.

### Components

The `components` folder is where all your HTML and JS(TS) will go. These must be DOM specific and cannot contain any code that would not normally run in the DOM.

> The code is injected at runtime into Discord and will not run if there are errors in the script file; it will just silently fail

### Writing Plugins

To write a plugin is really quite simple, follow this template

```
export const [PLUGIN_HANDLER_EXPORT] = (s: any) => {
   // Register IPC Content here
};

export const [PLUGIN_EXPORT_NAME]: SextantPlugin = {
    name: "[NAME_OF_PLUGIN]",
    load() {
        return () => {
           // Your Plugin Code goes here
        }
    }
    unload() {
        return () => {
           // Your Plugin Clean up goes here
        }
    }
}
```

> All the code in the return functions will be injected into the DOM at runtime, the return code MUST be DOM specific.

IPC events should be registered in the preload.js, currently I have no plans to automate it unless there are many events I would like to register.

> Be sure to clean up code that was previously injected! If not, the code blocks will be duplicated and it can lead to performance issues and undesired behaviors

### Registering Plugins and IPC Handlers

To register the plugin, import the plugin into the main.ts file, then add the plugin into the plugins list

```
const plugins = [
    dispatcher, // We them events
    file_loader, // Load asap
    settings_tab, // Load asap2
    dynamic_styles,
    better_stream,
    reduce_dom_size,
    // your plugin goes here
];
```

For the IPC Handler, there is a plugins\_handler list

```
const plugin_handlers = [
    file_loader_handler,
    dynamic_styles_handler,
    settings_tab_handler,
    // your plugin handler (IPC) goes here
];
```

If you would like the ability to disable and enable the plugin at runtime, or let the user be able to choose to toggle it off / on, add the name of the function to the `static/config.toml` file under plugins.

```
[Plugins]
# Disabling these will break functionality
DynamicStyles = true
Dispatcher = true
FileLoader = true
BetterStream = true
SettingsTab = true
##########################################

# You can add you plugins here
# This can be configured as u wish!
ReduceDOMSize = true
StopPropagation = true
###################################
```

### Stream Data to the Components

*   window.sextant\_events.\[METHOD\]
    

Something you might want to do is have your plugin data be available to the components you inject. Sextant provides a event structure similar to normal Javascript. The event listener code is in the **utils.ts** file. Methods exposed: `addEventListener` `dispatchEvent` `removeEventListener`

For example, in the **BetterStream** plugin, we stream data to the components using the dispatch event handler.

```
window.sextant_events.dispatchEvent("bitrate", bitrate);
```

and in the component script we can listen for "bitrate" events.

```
window.sextant_events.addEventListener("bitrate", (bitrate: number) => {
})
```

> As a rule of thumb, make the event dispatch in the form of USERNAME\_EVENT to avoid naming conflicts and false event positives.