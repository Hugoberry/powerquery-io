---
title: HdInsight.Files
---

# HdInsight.Files


Returnerer en tabel, der indeholder egenskaberne for og indholdet i de blobs, der blev fundet i den angivne beholder i en samling af legitimationsoplysninger i Azure storage.


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Remarks

Returnerer en tabel, der indeholder en række for hver blobfil, der blev fundet på beholderens URL-adresse, <code>account</code>, i en samling af legitimationsoplysninger i Azure storage. De enkelte rækker indeholder egenskaber for filen og et link til filens indhold.



## Category
Accessing data
