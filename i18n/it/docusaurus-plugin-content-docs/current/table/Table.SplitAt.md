---
title: Table.SplitAt
---

# Table.SplitAt


Restituisce un elenco che contiene le prime righe del conteggio specificate e le righe rimanenti.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Remarks

Restituisce un elenco che contiene due tabelle, una con le prime N righe di <code>table</code> (come specificato da <code>count</code>) e una che contiene le righe rimanenti di <code>table</code>.Se le tabelle dell'elenco risultante vengono enumerate esattamente una volta e nell'ordine, la funzione enumererà <code>table</code> una sola volta.


## Examples

### Example #1 
Restituisce le prime due righe della tabella e le righe rimanenti della tabella.
```powerquery
Table.SplitAt(#table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}), 2)
```

Result: 
```powerquery
{
    #table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}}),
    #table({"a", "b", "c"}, {{7, 8, 9}})
}
```




## Category
Table.Row operations
