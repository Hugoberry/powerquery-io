---
title: List.RemoveLastN
---

# List.RemoveLastN


Restituisce un elenco che rimuove il numero specificato di elementi dalla fine dell&#39;elenco.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Restituisce un elenco che rimuove gli ultimi <code>countOrCondition</code> elementi dalla fine dell'elenco <code>list</code>. Se <code>list</code> contiene meno di <code>countOrCondition</code> elementi, viene restituito un elenco vuoto. <ul> <li>Se viene specificato un numero, indica fino a quanti elementi vengono rimossi. </li> <li>Se viene specificata una condizione, l'elenco restituito termina con il primo elemento a partire dalla fine di <code>list</code> che soddisfa il criterio. Se un elemento non soddisfa la condizione, non vengono considerati altri elementi. </li> <li>Se questo parametro è Null, viene rimosso solo un elemento. </li> </ul>


## Examples

### Example #1 
Creare un elenco da \{1, 2, 3, 4, 5} senza gli ultimi 3 numeri.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Creare un elenco da \{5, 4, 2, 6, 4} che termina con un numero inferiore a 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
