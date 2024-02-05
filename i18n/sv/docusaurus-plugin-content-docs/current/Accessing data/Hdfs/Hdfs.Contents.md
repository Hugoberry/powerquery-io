---
title: Hdfs.Contents
---

# Hdfs.Contents


## Description

Returnerar en tabell som innehåller egenskaperna och innehållet i filerna och mapparna i den angivna mappen från ett Hadoop-filsystem.


## Syntax

```powerquery
Hdfs.Contents(
    url as text
) as table
```


## Details

Returnerar en tabell som innehåller en rad för varje mapp och fil på mappens URL, <code>url</code>, från ett Hadoop-filsystem. Varje rad innehåller egenskaper för mappen eller filen och en länk till dess innehåll.



## Category
Accessing data
