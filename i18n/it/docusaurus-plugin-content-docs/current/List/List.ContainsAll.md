---
title: List.ContainsAll
---

# List.ContainsAll


## Description

Indica se un elenco include tutti i valori di un altro elenco.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Indica se l'elenco <code>list</code> include tutti i valori dell'altro elenco <code>values</code>.    Restituisce true se il valore viene trovato nell'elenco, in caso contrario false. È possibile specificare un valore dei criteri di equazione facoltativo, <code>equationCriteria</code>, per verificare il test di uguaglianza. 


## Examples

### Example #1 
Verificare se l&#39;elenco \{1, 2, 3, 4, 5} contiene 3 e 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
Verificare se l&#39;elenco \{1, 2, 3, 4, 5} contiene 5 e 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
