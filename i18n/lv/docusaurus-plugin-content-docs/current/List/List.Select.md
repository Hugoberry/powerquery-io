---
title: List.Select
---

# List.Select


## Description

Tiek atgriezts nosacījumam atbilstošo vērtību saraksts.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Details

Tiek atgriezts to saraksta <code>list</code> vērtību saraksts, kuras atbilst atlases nosacījumam <code>selection</code>.


## Examples

### Example #1 
Iegūstiet saraksta \{1, -3, 4, 9, -2} vērtības, kas ir lielākas par 0.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
