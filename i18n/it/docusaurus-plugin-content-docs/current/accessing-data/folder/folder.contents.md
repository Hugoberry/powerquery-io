---
title: Folder.Contents
---

# Folder.Contents


Restituisce una tabella con le proprietà e i contenuti dei file e delle cartelle disponibili nella cartella specificata.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Remarks

Restituisce una tabella con una riga per ogni cartella e file trovato nel `path` della cartella. Ogni riga contiene le proprietà della cartella o del file e un collegamento al relativo contenuto. Il parametro `options` è attualmente destinato solo all'uso interno.



## Category
Accessing data
