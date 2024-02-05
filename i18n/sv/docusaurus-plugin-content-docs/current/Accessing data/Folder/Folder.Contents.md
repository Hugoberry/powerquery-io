---
title: Folder.Contents
---

# Folder.Contents


## Description

Returnerar en tabell som innehåller egenskaperna och innehållet i filerna och mapparna i den angivna mappen.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Details

Returnerar en tabell som innehåller en rad för varje mapp och fil som finns i mappen <code>path</code>. Varje rad innehåller egenskaper för mappen eller filen och en länk till dess innehåll. Parametern <code>options</code> är för närvarande endast avsedd för intern användning.



## Category
Accessing data
