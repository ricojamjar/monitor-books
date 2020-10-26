{
    "version": "0.2.0",
    "configurations": [
      {
        "name": "Debug Tests Single Run",
        "type": "node",
        "request": "launch",
        "env": { "CI": "true" },
        "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/react-scripts",
        "args": ["test", "--runInBand", "--no-cache"],
        "cwd": "${workspaceRoot}",
        "protocol": "inspector",
        "console": "integratedTerminal",
        "internalConsoleOptions": "neverOpen"
      },
      {
        "name": "Debug tests watch mode",
        "type": "node",
        "request": "launch",
        "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/react-scripts",
        "args": ["test", "--runInBand", "--no-cache", "--watchAll"],
        "cwd": "${workspaceRoot}",
        "protocol": "inspector",
        "console": "integratedTerminal",
        "internalConsoleOptions": "neverOpen"
      },
      {
        "name": "Debug tests opened file",
        "type": "node",
        "request": "launch",
        "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/react-scripts",
        "args": [
          "test",
          "${fileBasenameNoExtension}",
          "--runInBand",
          "--no-cache",
          "--watchAll"
        ],
        "cwd": "${workspaceRoot}",
        "protocol": "inspector",
        "console": "integratedTerminal",
        "internalConsoleOptions": "neverOpen"
      }
    ]
  }