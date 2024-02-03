---
title: List.SingleOrDefault
---

# List.SingleOrDefault


## Description

Bir birim uzunluktaki bir liste için bir liste öğesi ve boş bir liste için varsayılan değeri döndürür.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Details

<code>list</code> listesinde yalnızca bir öğe varsa bu öğeyi döndürür.    Liste boşsa isteğe bağlı bir <code>default</code> belirtilmediyse işlev null döndürür. Listede birden çok öğe varsa işlev bir hata döndürür.


## Examples

### Example #1 
\{1} listesindeki tek değeri bulur.
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
\{} listesindeki tek değeri bulur.
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
\{} listesindeki tek değeri bulur. Boşsa -1 döndürür.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
