---
title: HdInsight.Files
---

# HdInsight.Files


## Description

Egy Azure-tárolócsoportbeli blobtároló blobjainak tulajdonságait és tartalmát tartalmazó tábla visszaadása.


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Details

A függvény megvizsgálja egy Azure-tárolócsoport <code>account</code> paraméterben megadott URL-címen található tárolóját, és előállít egy táblát, amelynek minden sora a tároló egyik fájlját írja le tulajdonságok és a fájl tartalmához vezető hivatkozás formájában.



## Category
Accessing data
