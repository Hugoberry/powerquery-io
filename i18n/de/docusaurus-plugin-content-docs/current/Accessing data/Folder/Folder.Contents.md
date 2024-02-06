---
title: Folder.Contents
---

# Folder.Contents


Gibt eine Tabelle mit den Eigenschaften und Inhalten der Dateien und Ordner zurück, die im angegebenen Ordner gefunden wurden.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Remarks

Gibt eine Tabelle zurück, die eine Zeile für jeden Ordner und jede Datei im Ordner <code>path</code> enthält. Jede Zeile enthält Eigenschaften des Ordners bzw. der Datei sowie einen Link zum jeweiligen Inhalt. Der <code>options</code>-Parameter ist derzeit nur für die interne Verwendung vorgesehen.



## Category
Accessing data
