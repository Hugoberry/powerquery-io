---
title: List.IsEmpty
---

# List.IsEmpty


## Description

Retorna el valor true si la llista és buida.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Details

Retorna el valor <code>true</code> si la llista, <code>list</code>, no conté cap valor (length 0). Si la llista conté valors (length > 0), retorna <code>false</code>.


## Examples

### Example #1 
Troba si la llista \{} és buida.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2 
Troba si la llista \{1, 2} és buida.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
