---
title: List.Sort
---

# List.Sort


Ordina un elenco di dati in base ai criteri specificati.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Remarks

Ordina un elenco di dati, `list`, in base ai criteri facoltativi specificati. Un parametro facoltativo, `comparisonCriteria`, può essere specificato come criterio di confronto. Questa operazione può accettare i valori seguenti:

-   Per controllare l'ordine, il criterio di confronto può essere un valore di ordine di enumerazione. (`Order.Descending`, `Order.Ascending`).
-   Per calcolare una chiave da usare per l'ordinamento, è possibile usare una funzione di 1 argomento.
-   Per selezionare una chiave e un ordine di controllo, il criterio di confronto può essere un elenco contenente la chiave e l'ordine (`{each 1 / _, Order.Descending}`).
-   Per controllare completamente il confronto, è possibile usare una funzione di 2 argomenti (come Value.Compare). A questa funzione verranno passati due elementi dall'elenco (due elementi qualsiasi, in qualsiasi ordine). La funzione deve restituire uno dei valori seguenti:
    -   `-1`: il primo elemento è minore del secondo elemento.
    -   `0`: gli elementi sono uguali.
    -   `1`: il primo elemento è maggiore del secondo elemento.


## Examples

### Example #1
Ordinare l'elenco \{2, 3, 1\}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Ordinare l'elenco \{2, 3, 1\} in ordine decrescente.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3
Ordinare l'elenco \{2, 3, 1\} in ordine decrescente utilizzando il metodo Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
