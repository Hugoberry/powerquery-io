---
title: List.Modes
---

# List.Modes


Devuelve una lista de los valores más frecuentes de la lista.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Devuelve los elementos que aparecen con mayor frecuencia en `list`. Si la lista está vacía, se genera un error. Si aparecen varios elementos con la misma frecuencia máxima, se devuelven todos. Se puede especificar un valor de criterios de comparación opcional, `equationCriteria`, para controlar las pruebas de igualdad.


## Examples

### Example #1
Buscar los elementos que aparecen con más frecuencia en la lista `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
