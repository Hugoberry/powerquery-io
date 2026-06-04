---
title: List.Product
---

# List.Product


A listán szereplő számok szorzatát adja vissza.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Remarks

A(z) `numbersList` listán szereplő nem null értékű számok szorzatát adja vissza. Null értéket ad vissza, ha nem szerepel a listán nem null értékű szám.


## Examples

### Example #1
Az `{1, 2, 3, 3, 4, 5, 5}` listán szereplő számok szorzatának meghatározása
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
