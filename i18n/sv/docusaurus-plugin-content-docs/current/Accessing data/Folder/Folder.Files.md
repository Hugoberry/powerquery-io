---
title: Folder.Files
---

# Folder.Files


Returnerar en tabell som innehåller egenskaperna och innehållet i filerna i den angivna mappen och undermapparna.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Returnerar en tabell som innehåller en rad för varje fil i mappen <code>path</code> och alla dess undermappar. Varje rad innehåller egenskaper för filen och en länk till dess innehåll. Parametern <code>options</code> är för närvarande endast avsedd för internt bruk.



## Category
Accessing data
