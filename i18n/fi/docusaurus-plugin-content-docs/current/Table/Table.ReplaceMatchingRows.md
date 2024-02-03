---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


## Description

Korvaa kaikki määritetyt rivit annetuilla riveillä.


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Details

Korvaa kaikki määritetyt rivit annetuilla riveillä kohteessa <code>table</code>. Korvattavat rivit ja korvaavat rivit on määritetty kohteessa <code>replacements</code> käyttäen muotoilua \{old, new}.    Valinnainen parametri <code>equationCriteria</code> voidaan määrittää ohjaamaan taulukon rivien välistä vertailua.


## Examples

### Example #1 
Korvaa rivit [a = 1, b = 2] ja [a = 2, b = 3] riveillä [a = -1, b = -2],[a = -2, b = -3] taulukossa.
```powerquery
Table.ReplaceMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 2, b = 3],
        [a = 3, b = 4],
        [a = 1, b = 2]
    }),
    {
        {[a = 1, b = 2], [a = -1, b = -2]},
        {[a = 2, b = 3], [a = -2, b = -3]}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = -1, b = -2],
    [a = -2, b = -3],
    [a = 3, b = 4],
    [a = -1, b = -2]
})
```




## Category
Table.Membership
