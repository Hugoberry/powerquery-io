---
title: List.MaxN
---

# List.MaxN


Restituisce i valori massimi dell&#39;elenco. È necessario specificare il numero di valori da restituire o una condizione di filtro.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

Restituisce i valori massimi dell'elenco <code>list</code>.    Dopo aver ordinato le righe, è possibile specificare parametri facoltativi per filtrare ulteriormente i risultati. Il parametro facoltativo <code>countOrCondition</code> specifica il numero di valori da restituire o una condizione di filtro. Il parametro facoltativo <code>comparisonCriteria</code> specifica come confrontare i valori nell'elenco. <ul>        <li> <code>list</code>: elenco dei valori.</li>        <li> <code>countOrCondition</code>: se viene specificato un numero, viene restituito un elenco di un massimo di <code>countOrCondition</code> elementi in ordine crescente. Se viene specificata una condizione, viene restituito un elenco di elementi che soddisfano inizialmente la condizione. Se un elemento non soddisfa la condizione, non vengono considerati altri elementi.</li><li><code>comparisonCriteria</code>: <i>[facoltativo]</i> è possibile specificare un valore facoltativo <code>comparisonCriteria</code> per determinare come confrontare gli elementi nell'elenco. Se questo parametro è Null, si usa l'operatore di confronto predefinito. </li></ul>



## Category
List.Ordering
