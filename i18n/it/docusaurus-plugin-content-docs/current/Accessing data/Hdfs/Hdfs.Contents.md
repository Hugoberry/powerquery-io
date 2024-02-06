---
title: Hdfs.Contents
---

# Hdfs.Contents


Restituisce una tabella con le proprietà e i contenuti dei file e delle cartelle disponibili nella cartella specificata da un file system Hadoop.


## Syntax

```powerquery
Hdfs.Contents(
    url as text
) as table
```


## Remarks

Restituisce una tabella con una riga per ogni cartella e file trovato all'URL <code>url</code> della cartella da un file system Hadoop. Ogni riga contiene le proprietà della cartella o del file e un collegamento al relativo contenuto.



## Category
Accessing data
