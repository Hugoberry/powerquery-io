---
title: Hdfs.Files
---

# Hdfs.Files


## Description

Gibt eine Tabelle mit den Eigenschaften und Inhalten der Dateien des angegebenen Ordners und der Unterordner aus einem Hadoop-Dateisystem zurück.


## Syntax

```powerquery
Hdfs.Files(
    url as text
) as table
```


## Details

Gibt eine Tabelle mit je einer Zeile für die einzelnen Dateien unter der Ordner-URL "<code>url</code>" (einschließlich Unterordner) aus einem Hadoop-Dateisystem zurück. Jede Zeile enthält Eigenschaften der Datei sowie einen Link zu ihrem Inhalt.



## Category
Accessing data
