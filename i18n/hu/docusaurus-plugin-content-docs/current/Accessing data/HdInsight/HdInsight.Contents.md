---
title: HdInsight.Contents
---

# HdInsight.Contents


## Description

Egy Azure-tárolócsoportbeli fiók tárolóit tartalmazó navigációs tábla visszaadása.


## Syntax

```powerquery
HdInsight.Contents(
    account as text
) as table
```


## Details

A függvény megvizsgálja egy Azure-tárolócsoport <code>account</code> paraméterben megadott URL-címen található fiókját, és előállít egy navigációs táblát, amelynek minden sora a fiók egyik tárolóját írja le, és egy hivatkozást is tartalmaz az érintett tárolóblobra.



## Category
Accessing data
