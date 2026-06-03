---
title: DataLake.Files
---

# DataLake.Files


Geben Sie die URL Ihres Azure Data Lake Storage-Kontos ein.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Hiermit wird eine Tabelle aus Azure Data Lake Storage Gen1 zurückgegeben, die jeweils eine Zeile für jede Datei enthält, die unter der Adresse `URL` gefunden wird. Jede Zeile enthält die Eigenschaften der Datei und einen Link zu deren Inhalt.


