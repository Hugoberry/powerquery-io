---
title: List.RemoveLastN
---

# List.RemoveLastN


Restituisce un elenco che rimuove il numero specificato di elementi dalla fine dell'elenco.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Restituisce un elenco che rimuove gli ultimi `countOrCondition` elementi dalla fine dell'elenco `list`. Se `list` contiene meno di `countOrCondition` elementi, viene restituito un elenco vuoto.

-   Se viene specificato un numero, vengono rimossi fino al numero massimo di elementi.
-   Se viene specificata una condizione, tutti gli elementi corrispondenti consecutivi alla fine di `list` vengono rimossi.
-   Se questo parametro è Null, viene rimosso un solo elemento.


## Examples

### Example #1
Creare un elenco da \{1, 2, 3, 4, 5\} senza gli ultimi 3 numeri.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Creare un elenco da \{5, 4, 2, 6, 4\} che termina con un numero inferiore a 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
