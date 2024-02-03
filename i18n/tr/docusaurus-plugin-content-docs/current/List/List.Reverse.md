---
title: List.Reverse
---

# List.Reverse


## Description

Listedeki değerlerin sırasını tersine çevirir.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Details

<code>list</code> listesindeki değerleri tersine çevrilmiş sırada içeren bir liste döndürür.


## Examples

### Example #1 
\{1..10} listesinden ters sırada bir liste oluşturur.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
