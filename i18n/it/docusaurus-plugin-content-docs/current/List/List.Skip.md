---
title: List.Skip
---

# List.Skip


## Description

Restituisce un elenco che ignora il numero di elementi specificato a partire dall&#39;inizio dell&#39;elenco.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Restituisce un elenco che ignora il primo elemento dell'elenco <code>list</code>. Se <code>list</code> è un elenco vuoto, viene restituito un elenco vuoto.Questa funzione accetta un parametro facoltativo, <code>countOrCondition</code>, per ignorare più valori come elencato di seguito. <ul> <li>Se viene specificato un numero, indica fino a quanti elementi vengono ignorati. </li> <li>Se viene specificata una condizione, l'elenco restituito inizia con il primo elemento di <code>list</code> che soddisfa il criterio. Se un elemento non soddisfa la condizione, non vengono considerati altri elementi. </li> <li>Se questo parametro è Null, viene adottato il comportamento predefinito. </li> </ul>


## Examples

### Example #1 
Creare un elenco da \{1, 2, 3, 4, 5} senza i primi 3 numeri.
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
Creare un elenco da \{5, 4, 2, 6, 1} che inizia con un numero inferiore a 3.
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
