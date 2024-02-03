---
title: List.ContainsAll
---

# List.ContainsAll


## Description

Indica on una llista inclou tots els valors en una altra llista.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Indica si la llista <code>list</code> inclou els valors en una altra llista, <code>values</code>.    Retorna el valor true si es troba el valor a la llista, i retorna el valor false en cas contrari. Un valor de criteris d'equació opcional, <code>equationCriteria</code>, es pot especificar per controlar la prova d'igualtat. 


## Examples

### Example #1 
Esbrina si la llista \{1, 2, 3, 4, 5} conté 3 i 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
Esbrina si la llista \{1, 2, 3, 4, 5} conté 5 i 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
