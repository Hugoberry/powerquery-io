---
title: List.Sum
---

# List.Sum


## Description

Zwraca sumę elementów na liście.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Zwraca sumę wartości innych niż null z listy <code>list</code>.  Zwraca wartość null, jeśli na liście nie znajdują się wartości inne niż null.


## Examples

### Example #1 
Znajdź sumę liczb na liście &lt;code&gt;\{1, 2, 3}&lt;/code&gt;.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
