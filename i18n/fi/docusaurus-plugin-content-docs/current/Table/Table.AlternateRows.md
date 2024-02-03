---
title: Table.AlternateRows
---

# Table.AlternateRows


## Description

Säilyttää alkusiirtymän ja ottaa ja ohittaa seuraavat rivit vuorotellen.


## Syntax

```powerquery
Table.AlternateRows(
    table as table,
    offset as number,
    skip as number,
    take as number
) as table
```


## Details

Säilyttää alkusiirtymän ja ottaa ja ohittaa seuraavat rivit vuorotellen.    <ul>       <li><code>table</code>: syötetaulukko.</li>       <li><code>offset</code>: ennen iterointien aloittamista säilytettävien rivien määrä.</li>       <li><code>skip</code>: kussakin iteroinnissa poistettavien rivien määrä.</li>       <li><code>take</code>: kussakin iteroinnissa säilytettävien rivien määrä.</li>    </ul>    


## Examples

### Example #1 
Palauta taulukosta taulukko, joka alkaen ensimmäiseltä riviltä ohittaa yhden arvon ja säilyttää sitten yhden arvon.
```powerquery
Table.AlternateRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    1,
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
