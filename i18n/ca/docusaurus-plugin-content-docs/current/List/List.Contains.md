---
title: List.Contains
---

# List.Contains


## Description

Indica si la llista conté el valor.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Details

Indica si la llista <code>list</code> conté el valor <code>value</code>.    Retorna "true" si es troba el valor a la llista i "false" en cas contrari. Es pot especificar un valor de criteris d'equació opcional, <code>equationCriteria</code>, per controlar la prova d'igualtat. 


## Examples

### Example #1 
Esbrina si la llista \{1, 2, 3, 4, 5} conté 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
Esbrina si la llista \{1, 2, 3, 4, 5} conté 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
