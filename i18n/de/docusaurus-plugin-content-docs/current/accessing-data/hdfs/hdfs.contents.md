---
title: Hdfs.Contents
---

# Hdfs.Contents


Gibt eine Tabelle mit den Eigenschaften und Inhalten der Dateien und Ordner des angegebenen Ordners aus einem Hadoop-Dateisystem zurück.


## Syntax

```powerquery
Hdfs.Contents(
    url as text
) as table
```


## Remarks

Gibt eine Tabelle mit je einer Zeile für die einzelnen Ordner und Dateien unter der Ordner-URL "`url`" aus einem Hadoop-Dateisystem zurück. Jede Zeile enthält Eigenschaften des Ordners bzw. der Datei sowie einen Link zum jeweiligen Inhalt.



## Category
Accessing data
