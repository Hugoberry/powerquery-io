---
title: List.Transform
---

# List.Transform


## Description

Tiek atgriezts jauns saraksts, kura vērtības ir aprēķinātas, izmantojot šo sarakstu.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Details

Tiek atgriezts jauns vērtību saraksts, kas tiek iegūts, sarakstam <code>list</code> lietojot transformācijas funkciju <code>transform</code>.


## Examples

### Example #1 
Pieskaitiet 1 katrai saraksta \{1, 2} vērtībai.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
