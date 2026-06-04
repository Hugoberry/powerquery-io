---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Palauttaa minkä tahansa määritetyn rivin sijainnin tai sijainnit taulukon sisällä.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Remarks

Palauttaa luettelon `table` ensimmäisen esiintymän rivien sijainnit kohteesta `rows`. Palauttaa arvon -1, jos esiintymää ei löydy.

-   `table`: Syötetaulukko.
-   `rows`: Luettelo taulukon riveistä, joiden sijainnit etsitään.
-   `occurrence`: *(Valinnainen)* Määrittää palautettavan rivin esiintymät.
-   `equationCriteria`: *(Valinnainen)* Ohjaa taulukon rivien välistä vertailua.


## Examples

### Example #1
Etsi kohteen \[a = 2, b = 4\] tai \[a = 6, b = 8\] ensimmäisen esiintymän sijainti taulukossa `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2
Etsi kohteen \[a = 2, b = 4\] tai \[a = 6, b = 8\] kaikkien esiintymien sijainnit taulukossa `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}`.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
