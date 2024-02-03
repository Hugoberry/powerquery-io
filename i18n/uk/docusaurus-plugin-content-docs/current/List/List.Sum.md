---
title: List.Sum
---

# List.Sum


## Description

Повертає суму елементів у списку.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Повертає суму ненульових значень у списку, <code>list</code>.  Повертає null, якщо у списку немає ненульових значень.


## Examples

### Example #1 
Знайти суму чисел у списку &lt;code&gt;\{1, 2, 3}&lt;/code&gt;.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
