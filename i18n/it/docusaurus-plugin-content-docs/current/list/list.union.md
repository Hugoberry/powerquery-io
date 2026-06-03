---
title: List.Union
---

# List.Union


Restituisce l'unione dei valori di elenco trovati nell'input.


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

Accetta un elenco di elenchi `lists`, unisce gli elementi nei singoli elenchi e li restituisce nell'elenco di output. L'elenco restituito contiene quindi tutti gli elementi di tutti gli elenchi di input. L'operazione gestisce la tradizionale semantica a contenitori, di conseguenza i valori duplicati vengono confrontati come parte dell'unione. È possibile specificare un valore dei criteri di equazione facoltativo, `equationCriteria`, per verificare il test di uguaglianza.


## Examples

### Example #1
Creare un unione dell'elenco \{1..5\}, \{2..6\}, \{3..7\}.
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations
