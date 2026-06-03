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

Restituisce una tabella contenente una riga per ogni file trovato nella cartella specificata e in tutte le sue sottocartelle.

-   `path`: Il percorso della cartella da cui desideri recuperare i file. Il percorso della cartella specificato deve essere un percorso assoluto valido.
-   `options`: (Facoltativo) Questo parametro è attualmente destinato solo a un uso interno.

Ogni riga della tabella restituita contiene le proprietà del file e un collegamento al suo contenuto.


## Examples

### Example #1
Restituisce una tabella contenente tutti i file trovati in C:\\test-examples\\example-folder e in tutte le sue sottocartelle.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
