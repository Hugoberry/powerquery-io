---
title: List.Sum
---

# List.Sum


## Description

Возвращает сумму элементов в списке.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Возвращает сумму всех значений в списке <code>list</code> , отличных от NULL.  Возвращает значение NULL, если в списке нет значений, отличных от NULL.


## Examples

### Example #1 
Найти сумму чисел в списке &lt;code&gt;\{1, 2, 3}&lt;/code&gt;.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
