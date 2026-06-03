---
title: List.Mode
---

# List.Mode


Devuelve el valor más frecuente de la lista.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

Devuelve el elemento que aparece con más frecuencia en `list`. Si la lista está vacía, se produce un error. Si aparecen varios elementos con la misma frecuencia máxima, se elige el último. Se puede especificar un valor de criterios de comparación opcional, `equationCriteria`, para controlar las pruebas de igualdad.


## Examples

### Example #1
Buscar el elemento que aparece con más frecuencia en la lista `{"A", 1, 2, 3, 3, 4, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
Buscar el elemento que aparece con más frecuencia en la lista `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
