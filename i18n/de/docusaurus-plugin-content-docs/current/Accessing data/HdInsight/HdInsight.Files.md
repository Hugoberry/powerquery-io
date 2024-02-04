---
title: HdInsight.Files
---

# HdInsight.Files


## Description

Gibt eine Tabelle mit den Eigenschaften und Inhalten der BLOBs zurück, die in dem von einem Azure-Speichertresor angegebenen Container gefunden wurden.


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Details

Gibt eine Tabelle mit je einer Zeile für jede BLOB-Datei unter der Container-URL '<code>account</code>' aus einem Azure-Speichertresor zurück. Jede Zeile enthält Eigenschaften der Datei sowie einen Link zu ihrem Inhalt.



## Category
Accessing data
