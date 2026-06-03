---
title: List.LastN
---

# List.LastN


Restituisce un elenco dell'ultimo o degli ultimi elementi nell'elenco specificato. Può specificare facoltativamente quanti valori restituire o una condizione idonea.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

Restituisce un elenco dell'ultimo o degli ultimi elementi nell'elenco specificato.

-   `list`: elenco da esaminare. Se l'elenco è vuoto, viene restituito un elenco vuoto.
-   `countOrCondition`: (facoltativo) supporta la raccolta di più elementi o il filtro degli elementi. Sebbene questo parametro sia indicato come facoltativo, si verifica un errore se questo valore non viene specificato o è `null`. Il parametro può essere specificato in due modi:
    -   Se viene specificato un numero, vengono rimossi fino al numero di elementi specificato.
    -   Se viene specificata una condizione, vengono restituiti tutti gli elementi che soddisfano la condizione, a partire dalla fine dell'elenco. Quando un elemento non soddisfa la condizione, non vengono presi in considerazione ulteriori elementi.


## Examples

### Example #1
Trovare l'ultimo valore dell'elenco \{3, 4, 5, -1, 7, 8, 2\}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
Trovare i valori finali dell'elenco \{3, 4, 5, -1, 7, 8, 2\} che sono maggiori di 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
