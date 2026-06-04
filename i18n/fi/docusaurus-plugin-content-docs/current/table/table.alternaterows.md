---
title: Table.AlternateRows
---

# Table.AlternateRows


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


## Remarks

Säilyttää alkusiirtymän ja ottaa ja ohittaa seuraavat rivit vuorotellen.

-   `table`: syötetaulukko.
-   `offset`: ennen iterointien aloittamista säilytettävien rivien määrä.
-   `skip`: kussakin iteroinnissa poistettavien rivien määrä.
-   `take`: kussakin iteroinnissa säilytettävien rivien määrä.


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
