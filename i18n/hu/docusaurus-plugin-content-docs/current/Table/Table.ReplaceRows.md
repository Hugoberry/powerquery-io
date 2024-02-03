---
title: Table.ReplaceRows
---

# Table.ReplaceRows


## Description

Lecseréli a megadott sortartományt a megadott sorokra.


## Syntax

```powerquery
Table.ReplaceRows(
    table as table,
    offset as number,
    count as number,
    rows as list
) as table
```


## Details

Lecseréli a megadott számú sort (<code>count</code>) a bemeneti <code>table</code> táblában a megadott <code>rows</code> sorra a(z) <code>offset</code> után kezdve. A(z) <code>rows</code> paraméter egy rekordlista.    <ul>       <li><code>table</code>: Az a tábla, amelyben a csere végre lesz hajtva.</li>       <li><code>offset</code>: A kihagyandó sorok száma a lecserélési művelet kezdőpontja előtt.</li>       <li><code>count</code>: A lecserélendő sorok száma.</li>       <li><code>rows</code>: A(z) <code>table</code> táblába a(z) <code>offset</code> által megadott helyen beszúrandó rekordok listája.</li>    </ul>


## Examples

### Example #1 
Az 1. pozíciótól kezdve lecserél 3 sort.
```powerquery
Table.ReplaceRows(
    Table.FromRecords({
        [Column1 = 1],
        [Column1 = 2],
        [Column1 = 3],
        [Column1 = 4],
        [Column1 = 5]
    }),
    1,
    3,
    {[Column1 = 6], [Column1 = 7]}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1],
    [Column1 = 6],
    [Column1 = 7],
    [Column1 = 5]
})
```




## Category
Table.Row operations
