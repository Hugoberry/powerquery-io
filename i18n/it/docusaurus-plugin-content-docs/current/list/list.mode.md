---
title: List.Mode
---

# List.Mode


Restituisce il valore più frequente dell'elenco.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

Restituisce l'elemento più ricorrente in `list`. Se l'elenco è vuoto, viene generato un errore. Se vengono visualizzati più elementi con la stessa frequenza massima, viene scelto l'ultimo elemento. È possibile specificare un valore facoltativo per i criteri di confronto, `equationCriteria`, per controllare i test di uguaglianza.


## Examples

### Example #1
Trovare l'elemento più frequente dell'elenco `{"A", 1, 2, 3, 3, 4, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
Trovare l'elemento più frequente dell'elenco `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
