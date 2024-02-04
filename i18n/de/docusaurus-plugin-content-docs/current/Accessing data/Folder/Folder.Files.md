---
title: Folder.Files
---

# Folder.Files


## Description

Gibt eine Tabelle mit den Eigenschaften und Inhalten der Dateien des angegebenen Ordners und der Unterordner zurück.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Details

Gibt eine Tabelle zurück, die eine Zeile für jede Datei im Ordner <code>path</code> und in allen zugehörigen Unterordnern enthält. Jede Zeile enthält Eigenschaften der Datei sowie einen Link zum jeweiligen Inhalt. Der <code>options</code>-Parameter ist derzeit nur für die interne Verwendung vorgesehen.



## Category
Accessing data
