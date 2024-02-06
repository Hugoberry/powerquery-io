---
title: List.Single
---

# List.Single


Bir birim uzunluktaki bir liste için bir liste öğesi döndürür, aksi halde özel durum atar.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

<code>list</code> listesinde yalnızca bir öğe varsa bu öğeyi döndürür.    Listede birden çok öğe varsa veya liste boşsa işlev bir özel durum döndürür.


## Examples

### Example #1 
\{1} listesindeki tek değeri bulur.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
\{1, 2, 3} listesindeki tek değeri bulur.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
