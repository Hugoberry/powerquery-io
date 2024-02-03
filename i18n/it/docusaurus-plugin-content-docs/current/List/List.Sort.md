---
title: List.Sort
---

# List.Sort


## Description

Ordina un elenco di dati in base ai criteri specificati.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Details

Ordina un elenco di dati, <code>list</code>, in base ai criteri facoltativi specificati. Un parametro facoltativo, <code>comparisonCriteria</code>, può essere specificato come criterio di confronto. Questa operazione può accettare i valori seguenti: <ul> <li>Per controllare l'ordine, il criterio di confronto può essere un valore di ordine di enumerazione. (<code>Order.Descending</code>, <code>Order.Ascending</code>). </li> <li>Per calcolare una chiave da usare per l'ordinamento, è possibile usare una funzione di 1 argomento. </li> <li>Per selezionare una chiave e un ordine di controllo, il criterio di confronto può essere un elenco contenente la chiave e l'ordine (<code>\{each 1 / _, Order.Descending}</code>). </li> <li>Per controllare completamente il confronto, è possibile usare una funzione di 2 argomenti. A questa funzione verranno passati due elementi dall'elenco (due elementi qualsiasi, in qualsiasi ordine). La funzione deve restituire uno dei valori seguenti: <ul> <li><code>-1</code>: il primo elemento è minore del secondo elemento.</li> <li><code>0</code>: gli elementi sono uguali.</li> <li><code>1</code>: il primo elemento è maggiore del secondo elemento.</li> </ul> Value.Compare è un metodo che può essere usato per delegare questa logica. </li></ul>


## Examples

### Example #1 
Ordinare l&#39;elenco \{2, 3, 1}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Ordinare l&#39;elenco \{2, 3, 1} in ordine decrescente.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
Ordinare l&#39;elenco \{2, 3, 1} in ordine decrescente utilizzando il metodo Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
