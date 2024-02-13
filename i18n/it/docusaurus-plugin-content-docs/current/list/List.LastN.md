---
title: List.LastN
---

# List.LastN


Restituisce l&#39;ultimo valore dell&#39;elenco.  Può specificare facoltativamente quanti valori restituire o una condizione idonea.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

Restituisce l'ultimo elemento dell'elenco <code>list</code>. Se l'elenco è vuoto viene generata un'eccezione. Questa funzione accetta un parametro facoltativo <code>countOrCondition</code> per supportare la raccolta di più elementi o il filtro degli elementi. <code>countOrCondition</code> può essere specificato in tre modi: <ul>  <li>Se viene specificato un numero, indica il numero massimo di elementi restituiti. </li>  <li>Se viene specificata una condizione, vengono restituiti tutti gli elementi che soddisfano inizialmente la condizione, a partire dalla fine dell'elenco. Se un elemento non soddisfa la condizione, non vengono considerati altri elementi. </li>  <li>Se questo parametro è Null, viene restituito l'ultimo elemento dell'elenco.</li> </ul>


## Examples

### Example #1 
Trovare l&#39;ultimo valore dell&#39;elenco \{3, 4, 5, -1, 7, 8, 2}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
Trovare i valori finali dell&#39;elenco \{3, 4, 5, -1, 7, 8, 2} che sono maggiori di 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
