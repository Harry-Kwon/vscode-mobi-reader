# MOBI Reader - Vs Code Extension for Viewing MOBI files
Convert and preview MOBI ebook files in VS Code.

## Usage

1. Open a MOBI file in VS Code.
2. Run `View Mobi` in the command palette (`ctrl+shift+P`)

The `View Mobi` command creates an html conversion in the directory of the mobi file and opens a preview in VS Code.

## MOBI conversion

This extension uses the [node-mobi](https://github.com/ctbarna/node-mobi) package to convert mobi files.