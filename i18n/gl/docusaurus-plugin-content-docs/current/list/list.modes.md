---
title: List.Modes
---

# List.Modes


Devolve unha lista dos valores máis frecuentes na lista.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Devolve os elementos que aparecen con máis frecuencia en `list`. Se a lista está baleira, xérase un erro. Se aparecen varios elementos coa mesma frecuencia máxima, devólvense todos eles. Pódese especificar un valor opcional dos criterios de comparación, `equationCriteria`, para controlar as probas de igualdade.


## Examples

### Example #1
Buscar os elementos que aparecen con máis frecuencia na lista `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
