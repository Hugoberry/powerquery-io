---
title: List.Transform
---

# List.Transform


## Description

Az ezen lista alapján kiszámított értékekből álló új listát ad vissza.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Details

Értékek új listáját adja vissza oly módon, hogy alkalmazza a(z) <code>transform</code> átalakító függvényt a(z) <code>list</code> listára.


## Examples

### Example #1 
1 hozzáadása az \{1, 2} lista mindegyik értékéhez
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
