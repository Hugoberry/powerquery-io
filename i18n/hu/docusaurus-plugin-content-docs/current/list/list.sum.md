---
title: List.Sum
---

# List.Sum


A listán szereplő elemek összegét adja vissza.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

A(z) `list` listán szereplő nem null értékek összegét adja vissza. Null értéket ad vissza, ha nem szerepel a listán nem null értékű szám.


## Examples

### Example #1
Az `{1, 2, 3}` listán szereplő számok összegének meghatározása
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
