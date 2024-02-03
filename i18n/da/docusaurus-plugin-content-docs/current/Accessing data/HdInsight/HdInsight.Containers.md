---
title: HdInsight.Containers
---

# HdInsight.Containers


## Description

Returnerer en navigationstabel, der indeholder de objektbeholdere, som blev fundet i den angivne konto, fra en samling legitimationsoplysninger i Azure storage.


## Syntax

```powerquery
HdInsight.Containers(
    account as text
) as table
```


## Details

Returnerer en navigationstabel, der indeholder en række for hver objektbeholder, som blev fundet i konto-URL-adressen <code>account</code>, fra en samling legitimationsoplysninger i Azure storage. De enkelte rækker indeholder et link til beholderblobbene.



## Category
Accessing data
