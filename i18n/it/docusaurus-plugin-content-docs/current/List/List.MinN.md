---
title: List.MinN
---

# List.MinN


Restituisce i valori minimi dell&#39;elenco. È possibile specificare il numero di valori da restituire o una condizione di filtro.


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

Restituisce i valori minimi dell'elenco <code>list</code>.    Il parametro <code>countOrCondition</code> specifica il numero di valori da restituire o una condizione di filtro. Il parametro facoltativo <code>comparisonCriteria</code> specifica come confrontare i valori nell'elenco. <ul>        <li> <code>list</code>: elenco dei valori.</li>        <li> <code>countOrCondition</code>: se viene specificato un numero, viene restituito un elenco di un massimo di <code>countOrCondition</code> elementi in ordine crescente. Se viene specificata una condizione, viene restituito un elenco di elementi che soddisfano inizialmente la condizione. Se un elemento non soddisfa la condizione, non vengono considerati altri elementi. Se questo parametro è Null viene restituito il valore singolo più piccolo dell'elenco.</li><li><code>comparisonCriteria</code>: <i>[facoltativo]</i> è possibile specificare un valore facoltativo <code>comparisonCriteria</code> per determinare come confrontare gli elementi nell'elenco. Se questo parametro è Null, si usa l'operatore di confronto predefinito. </li></ul>


## Examples

### Example #1 
Trovare i 5 valori più piccoli dell&#39;elenco &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt;.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
