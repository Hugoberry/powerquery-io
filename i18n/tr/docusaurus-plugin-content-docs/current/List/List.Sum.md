---
title: List.Sum
---

# List.Sum


## Description

Listedeki öğelerin toplamını döndürür.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

<code>list</code> listesindeki null olmayan değerlerin toplamını döndürür.  Listede null olmayan değer yoksa null döndürülür.


## Examples

### Example #1 
&lt;code&gt;\{1, 2, 3}&lt;/code&gt; listesindeki sayıların toplamını bulur.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
