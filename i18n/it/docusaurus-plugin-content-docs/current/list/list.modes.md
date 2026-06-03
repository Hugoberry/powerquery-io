---
title: List.Modes
---

# List.Modes


Restituisce un elenco con i valori più frequenti dell'elenco.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Restituisce gli elementi più ricorrenti in `list`. Se l'elenco è vuoto, viene generato un errore. Se vengono visualizzati più elementi con la stessa frequenza massima, vengono restituiti tutti gli elementi. È possibile specificare un valore facoltativo per i criteri di confronto, `equationCriteria`, per controllare i test di uguaglianza.


## Examples

### Example #1
Trovare gli elementi più frequenti dell'elenco `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
