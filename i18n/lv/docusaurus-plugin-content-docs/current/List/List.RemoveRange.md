---
title: List.RemoveRange
---

# List.RemoveRange


## Description

Tiek noņemts noteikts vērtību skaits, sākot no norādītās pozīcijas.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Details

No saraksta <code>list</code> tiek noņemtas <code>count</code> vērtības, sākot no norādītās pozīcijas <code>index</code>.


## Examples

### Example #1 
Noņemiet no saraksta \{1, 2, 3, 4, -6, -2, -1, 5} 3 vērtības, sākot no indeksa 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
