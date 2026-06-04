---
title: List.Mode
---

# List.Mode


Devolve o valor máis frecuente da lista.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

Devolve o elemento que aparece con máis frecuencia en `list`. Se a lista está baleira, xérase un erro. Se aparecen varios elementos coa mesma frecuencia máxima, escóllese o último. Pódese especificar un valor opcional dos criterios de comparación, `equationCriteria`, para controlar as probas de igualdade.


## Examples

### Example #1
Buscar o elemento que aparece con máis frecuencia na lista `{"A", 1, 2, 3, 3, 4, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
Buscar o elemento que aparece con máis frecuencia na lista `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
