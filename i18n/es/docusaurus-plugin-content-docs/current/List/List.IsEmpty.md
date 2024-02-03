---
title: List.IsEmpty
---

# List.IsEmpty


## Description

Devuelve true si la lista está vacía.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Details

Vuelve <code>true</code> si la lista <code>list</code> no contiene ningún valor (length 0). Si la lista contiene valores (length > 0), devuelve <code>false</code>.


## Examples

### Example #1 
Buscar si la lista \{} está vacía.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2 
Buscar si la lista \{1, 2} está vacía.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
