---
title: Folder.Files
---

# Folder.Files


Restituisce una tabella con le proprietà e i contenuti dei file disponibili nella cartella specificata e nelle relative sottocartelle.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Restituisce una tabella con una riga per ogni file trovato nel <code>path</code> della cartella e in tutte le relative sottocartelle. Ogni riga contiene le proprietà della cartella o del file e un collegamento al relativo contenuto. Il parametro <code>options</code> è attualmente destinato solo all'uso interno.



## Category
Accessing data
