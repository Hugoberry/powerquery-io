---
title: List.IsDistinct
---

# List.IsDistinct


## Description

Indica se existem duplicados na lista.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Details

Devolve um valor lógico se existirem duplicados na lista <code>list</code>; <code>true</code> se a lista for distinta, <code>false</code> se existirem valores duplicados. 


## Examples

### Example #1 
Determinar se a lista \{1, 2, 3} é distinta (ou seja, se não contém duplicados).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2 
Determinar se a lista \{1, 2, 3, 3} é distinta (ou seja, se não contém duplicados).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
