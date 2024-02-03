---
title: List.Select
---

# List.Select


## Description

Vrne seznam vrednosti, ki ustrezajo pogoju.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Details

Vrne seznam vrednosti iz seznama <code>list</code>, ki ustrezajo pogoju izbire <code>selection</code>.


## Examples

### Example #1 
Poiščite vrednosti na seznamu \{1, -3, 4, 9, -2}, ki so večje od 0.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
