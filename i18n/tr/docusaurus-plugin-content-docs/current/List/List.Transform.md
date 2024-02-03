---
title: List.Transform
---

# List.Transform


## Description

Bu listeden hesaplanan yeni bir değer listesi döndürür.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Details

<code>list</code> listesine <code>transform</code> dönüştürme işlevi uygulayarak yeni bir değer listesi döndürür.


## Examples

### Example #1 
\{1, 2} listesindeki her öğeye 1 ekler.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
