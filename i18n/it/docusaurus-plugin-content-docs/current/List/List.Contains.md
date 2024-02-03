---
title: List.Contains
---

# List.Contains


## Description

Indica se l&#39;elenco contiene il valore.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Details

Indica se l'elenco <code>list</code> contiene il valore <code>value</code>.    Restituisce true se il valore viene trovato nell'elenco, in caso contrario false. È possibile specificare un valore dei criteri di equazione facoltativo, <code>equationCriteria</code>, per verificare il test di uguaglianza. 


## Examples

### Example #1 
Verificare se l&#39;elenco \{1, 2, 3, 4, 5} contiene 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
Verificare se l&#39;elenco \{1, 2, 3, 4, 5} contiene 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
