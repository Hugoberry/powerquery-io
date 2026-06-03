---
title: List.Single
---

# List.Single


Uzunluğu bir olan bir liste için tek bir liste öğesini döndürür, aksi takdirde bir hata verir.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

`list` listesinde yalnızca bir öğe varsa bu öğeyi döndürür. Birden fazla öğe varsa veya liste boşsa, işlev bir hata verir.


## Examples

### Example #1
\{1\} listesindeki tek değeri bulur.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2
\{1, 2, 3\} listesindeki tek değeri bulur.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
