---
title: List.Sum
---

# List.Sum


Listedeki öğelerin toplamını döndürür.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

`list` listesindeki null olmayan değerlerin toplamını döndürür. Listede null olmayan değer yoksa null döndürülür.


## Examples

### Example #1
`{1, 2, 3}` listesindeki sayıların toplamını bulur.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
