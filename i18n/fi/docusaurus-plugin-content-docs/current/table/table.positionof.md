---
title: Table.PositionOf
---

# Table.PositionOf


Palauttaa rivin sijainnin tai sijainnit taulukon sisällä.


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Remarks

Palauttaa kohteen `row` ensimmäisen esiintymän rivisijainnin määritetyssä kohteessa `table`. Palauttaa arvon -1, jos esiintymää ei löydy.

-   `table`: Syötetaulukko.
-   `row`: Taulukon rivi, jonka sijainnin haluat selvittää.
-   `occurrence`: *(Valinnainen)* Määrittää palautettavan rivin esiintymät.
-   `equationCriteria`: *(Valinnainen)* Ohjaa taulukon rivien välistä vertailua.


## Examples

### Example #1
Etsi kohteen \[a = 2, b = 4\] ensimmäisen esiintymän sijainti taulukossa `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4]
)
```

Result: 
```powerquery
0
```


### Example #2
Etsi kohteen \[a = 2, b = 4\] toisen esiintymän sijainti taulukossa `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    1
)
```

Result: 
```powerquery
2
```


### Example #3
Etsi kohteen \[a = 2, b = 4\] kaikkien esiintymien sijainnit taulukossa `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    Occurrence.All
)
```

Result: 
```powerquery
{0, 2}
```




## Category
Table.Membership
