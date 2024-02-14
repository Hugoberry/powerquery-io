---
title: Hdfs.Files
---

# Hdfs.Files


Returnerar en tabell som innehåller egenskaperna och innehållet i filerna i den angivna mappen och undermapparna från ett Hadoop-filsystem.


## Syntax

```powerquery
Hdfs.Files(
    url as text
) as table
```


## Remarks

Returnerar en tabell som innehåller en rad för varje fil på mappens URL, <code>url</code>, och undermapparna från ett Hadoop-filsystem. Varje rad innehåller egenskaper för filen och en länk till dess innehåll.



## Category
Accessing data
