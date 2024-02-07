---
title: HdInsight.Contents
---

# HdInsight.Contents


Returnerar en navigeringstabell som innehåller de containrar som påträffats i det angivna kontot från ett Azure Storage-valv.


## Syntax

```powerquery
HdInsight.Contents(
    account as text
) as table
```


## Remarks

Returnerar en navigeringstabell som innehåller en rad för varje container som påträffats på kontots URL, <code>account</code>, från ett Azure Storage-valv. Varje rad innehåller en länk till containerblobarna.



## Category
Accessing data
