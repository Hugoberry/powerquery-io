---
title: Table.MinN
---

# Table.MinN


## Description

Restituisce la riga o le righe più piccole mediante i criteri specificati.


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Details

Restituisce la riga o le righe più piccole in <code>table</code>, dato <code>comparisonCriteria</code>. Dopo aver ordinato le righe, specificare il parametro <code>countOrCondition</code> per filtrare ulteriormente i risultati. Si noti che l'algoritmo di ordinamento non può garantire un risultato ordinato fisso. Il parametro <code>countOrCondition</code> accetta più formati:    <ul>        <li> Se viene specificato un numero, viene restituito un elenco di un massimo di <code>countOrCondition</code> elementi in ordine crescente. </li>        <li> Se viene specificata una condizione, viene restituito un elenco di elementi che soddisfano inizialmente la condizione. Se un elemento non soddisfa la condizione, non vengono considerati altri elementi. </li> </ul>


## Examples

### Example #1 
Trovare la riga con il valore più piccolo nella colonna [a] con la condizione [a] &lt; 3, nella tabella. Le righe vengono ordinate prima dell&#39;applicazione del filtro.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 4]
    }),
    "a",
    each [a] < 3
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 0, b = 0],
    [a = 2, b = 4]
})
```


### Example #2 
Trovare la riga con il valore più piccolo nella colonna [a] con la condizione [b] &lt; 0, nella tabella. Le righe vengono ordinate prima dell&#39;applicazione del filtro.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] < 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
