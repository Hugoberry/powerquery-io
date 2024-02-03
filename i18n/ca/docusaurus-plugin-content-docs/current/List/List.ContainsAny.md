---
title: List.ContainsAny
---

# List.ContainsAny


## Description

Indica on una llista inclou qualsevol dels valors en una altra llista.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Indica si la llista <code>list</code> inclou qualsevol dels valors en una altra llista, <code>values</code>.        Retorna el valor true si es troba el valor a la llista, i retorna el valor false en cas contrari. Un valor de criteris d'equació opcional, <code>equationCriteria</code>, es pot especificar per controlar la prova d'igualtat. 


## Examples

### Example #1 
Esbrina si la llista \{1, 2, 3, 4, 5} conté 3 o 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
Esbrina si la llista \{1, 2, 3, 4, 5} conté 6 o 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
