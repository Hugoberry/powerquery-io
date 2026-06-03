---
title: List.MinN
---

# List.MinN


Restituisce i valori minimi dell'elenco. È possibile specificare il numero di valori da restituire o una condizione di filtro.


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

Restituisce i valori minimi dell'elenco `list`. Il parametro `countOrCondition` specifica il numero di valori da restituire o una condizione di filtro. Il parametro facoltativo, `comparisonCriteria`, specifica come confrontare i valori nell'elenco.

-   `list`: elenco di valori.
-   `countOrCondition`: se viene specificato un numero, viene restituito un elenco di un massimo di `countOrCondition` elementi in ordine crescente. Se viene specificata una condizione, viene restituito un elenco di elementi che soddisfano inizialmente la condizione. Se un elemento non soddisfa la condizione, non vengono presi in considerazione altri elementi. Se questo parametro è null viene restituito il valore singolo più piccolo dell'elenco.
-   `comparisonCriteria`: *(facoltativo)* è possibile specificare un valore facoltativo, `comparisonCriteria`, per determinare come confrontare gli elementi nell'elenco. Se il parametro è null, viene usato l'operatore di confronto predefinito.


## Examples

### Example #1
Trovare i 5 valori più piccoli dell'elenco `{3, 4, 5, -1, 7, 8, 2}`.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
