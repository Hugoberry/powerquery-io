---
title: DataLake.Contents
---

# DataLake.Contents


Geben Sie die URL Ihres Azure Data Lake Storage Gen1-Kontos ein.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Hiermit wird eine Tabelle aus Azure Data Lake Storage Gen1 zurückgegeben, die jeweils eine Zeile für jeden Ordner oder jede Datei enthält, der/die unter der Adresse <code>URL</code> gefunden wird. Jede Zeile enthält die Eigenschaften des Ordners/der Datei und einen Link zum zugehörigen Inhalt.


