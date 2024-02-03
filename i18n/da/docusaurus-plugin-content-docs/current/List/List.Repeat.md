---
title: List.Repeat
---

# List.Repeat


## Description

Returnerer en liste, der tæller gentagelser på den oprindelige liste.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Details

Returnerer en liste, der indeholder <code>count</code> gentagelser fra den oprindelige liste, <code>list</code>.


## Examples

### Example #1 
Opret en liste, hvor \{1, 2} gentages 3 gange.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
