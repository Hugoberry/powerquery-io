---
title: List.ContainsAny
---

# List.ContainsAny


## Description

Indica se un elenco include uno dei valori di un altro elenco.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Indica se l'elenco <code>list</code> include uno dei valori dell'altro elenco <code>values</code>.        Restituisce true se il valore viene trovato nell'elenco, in caso contrario false. È possibile specificare un valore dei criteri di equazione facoltativo, <code>equationCriteria</code>, per verificare il test di uguaglianza. 


## Examples

### Example #1 
Verificare se l&#39;elenco \{1, 2, 3, 4, 5} contiene 3 o 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
Verificare se l&#39;elenco \{1, 2, 3, 4, 5} contiene 6 o 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
