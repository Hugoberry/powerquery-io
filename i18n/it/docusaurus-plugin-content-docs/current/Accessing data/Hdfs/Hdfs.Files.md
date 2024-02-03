---
title: Hdfs.Files
---

# Hdfs.Files


## Description

Restituisce una tabella con le proprietà e i contenuti dei file disponibili nella cartella specificata e nelle relative sottocartelle da un file system Hadoop.


## Syntax

```powerquery
Hdfs.Files(
    url as text
) as table
```


## Details

Restituisce una tabella con una riga per ogni file trovato all'URL <code>url</code> della cartella e relative sottocartelle da un file system Hadoop. Ogni riga contiene le proprietà del file e un collegamento al relativo contenuto.



## Category
Accessing data
