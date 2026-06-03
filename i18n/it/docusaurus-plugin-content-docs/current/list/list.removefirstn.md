---
title: List.RemoveFirstN
---

# List.RemoveFirstN


Restituisce un elenco che ignora il numero di elementi specificato a partire dall'inizio dell'elenco.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Restituisce un elenco che rimuove il primo elemento dell'elenco `list`. Se `list` è un elenco vuoto, viene restituito un elenco vuoto. Questa funzione accetta un parametro facoltativo, `countOrCondition`, per supportare la rimozione di più valori, come indicato di seguito.

-   Se viene specificato un numero, vengono rimossi fino al numero massimo di elementi.
-   Se viene specificata una condizione, tutti gli elementi corrispondenti consecutivi all'inizio di `list` vengono rimossi.
-   Se questo parametro è Null, viene osservato il comportamento predefinito.


## Examples

### Example #1
Creare un elenco da \{1, 2, 3, 4, 5\} senza i primi 3 numeri.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
Creare un elenco da \{5, 4, 2, 6, 1\} che inizia con un numero inferiore a 3.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
