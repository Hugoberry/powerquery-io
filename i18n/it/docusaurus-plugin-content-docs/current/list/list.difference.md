---
title: List.Difference
---

# List.Difference


Restituisce la differenza dei due elenchi specificati.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Restituisce gli elementi dell'elenco <code>list1</code> che non sono presenti nell'elenco <code>list2</code>. I valori duplicati sono supportati.    È possibile specificare un valore dei criteri di equazione facoltativo, <code>equationCriteria</code>, per verificare il test di uguaglianza. 


## Examples

### Example #1 
Trovare gli elementi dell&#39;elenco \{1, 2, 3, 4, 5} che non sono presenti in \{4, 5, 3}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Trovare gli elementi dell&#39;elenco \{1, 2} che non sono presenti in \{1, 2, 3}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
