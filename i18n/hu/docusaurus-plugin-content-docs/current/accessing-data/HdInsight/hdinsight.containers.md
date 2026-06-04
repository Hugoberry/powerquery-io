---
title: HdInsight.Containers
---

# HdInsight.Containers


Egy Azure-tárolócsoportbeli fiók tárolóit tartalmazó navigációs tábla visszaadása.


## Syntax

```powerquery
HdInsight.Containers(
    account as text
) as table
```


## Remarks

A függvény megvizsgálja egy Azure-tárolócsoport `account` paraméterben megadott URL-címen található fiókját, és előállít egy navigációs táblát, amelynek minden sora a fiók egyik tárolóját írja le, és egy hivatkozást is tartalmaz az érintett tárolóblobra.



## Category
Accessing data
