---
title: List.FirstN
---

# List.FirstN


Restituisce il primo set di elementi dell&#39;elenco specificando quanti elementi devono essere restituiti o una condizione idonea.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Remarks

 <ul>  <li>Se viene specificato un numero, indica il numero massimo di elementi restituiti. </li>  <li>Se viene specificata una condizione, vengono restituiti tutti gli elementi che soddisfano inizialmente la condizione. Se un elemento non soddisfa la condizione, non vengono considerati altri elementi. </li> </ul>


## Examples

### Example #1 
Trovare i valori iniziali dell&#39;elenco \{3, 4, 5, -1, 7, 8, 2} che sono maggiori di 0.
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
