---
title: List.Select
---

# List.Select


Koşulu sağlayan bir değer listesi döndürür.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Remarks

<code>list</code> listesinden <code>selection</code> seçim koşulu ile eşleşen değerlerin listesini döndürür.


## Examples

### Example #1 
\{1, -3, 4, 9, -2} listesinde 0&#39;dan büyük olan son değerleri bulur.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
