---
title: HdInsight.Files
---

# HdInsight.Files


Returnerar en tabell som innehåller egenskaperna och innehållet för de blobar som påträffats i den angivna containern från ett Azure Storage-valv.


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Remarks

Returnerar en tabell som innehåller en rad för varje blobfil som påträffats på containerns webbadress, <code>account</code>, från ett Azure Storage-valv. Varje rad innehåller egenskaper för filen och en länk till dess innehåll.



## Category
Accessing data
