---
title: List.Distinct
---

# List.Distinct


Yinelenen değerleri kaldırılmış bir değer listesi döndürür.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

<code>list</code> listesindeki tüm değerleri içeren ve yinelenen değerleri kaldırılmış bir liste döndürür. Liste boşsa, sonuç boş bir listedir.


## Examples

### Example #1 
\{1, 1, 2, 3, 3, 3} listesinden yinelenen değerleri kaldırır.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
