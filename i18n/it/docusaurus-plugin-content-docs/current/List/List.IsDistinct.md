---
title: List.IsDistinct
---

# List.IsDistinct


Indica se sono presenti duplicati nell&#39;elenco.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Restituisce un valore logico se sono presenti duplicati nell'elenco <code>list</code>; <code>true</code> se l'elenco è distinto, <code>false</code> se esistono valori duplicati. 


## Examples

### Example #1 
Verificare se l&#39;elenco \{1, 2, 3} è distinto (ovvero senza duplicati).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2 
Verificare se l&#39;elenco \{1, 2, 3, 3} è distinto (ovvero senza duplicati).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
