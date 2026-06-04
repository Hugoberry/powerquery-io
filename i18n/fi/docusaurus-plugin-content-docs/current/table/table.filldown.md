---
title: Table.FillDown
---

# Table.FillDown


Levittää edellisen solun arvo sarakkeessa alapuolella oleviin tyhjäarvoisiin soluihin.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Remarks

Palauttaa määritetystä kohteesta `table` taulukon, jossa edellisen solun arvo levitetään määritetyssä kohteessa `columns` alapuolella oleviin tyhjäarvoisiin soluihin.


## Examples

### Example #1
Palauta taulukko, jonka tyhjäarvot sarakkeessa \[Place\] on täytetty niiden yllä olevalla arvolla taulukosta.
```powerquery
Table.FillDown(
    Table.FromRecords({
        [Place = 1, Name = "Bob"],
        [Place = null, Name = "John"],
        [Place = 2, Name = "Brad"],
        [Place = 3, Name = "Mark"],
        [Place = null, Name = "Tom"],
        [Place = null, Name = "Adam"]
    }),
    {"Place"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Place = 1, Name = "Bob"],
    [Place = 1, Name = "John"],
    [Place = 2, Name = "Brad"],
    [Place = 3, Name = "Mark"],
    [Place = 3, Name = "Tom"],
    [Place = 3, Name = "Adam"]
})
```




## Category
Table.Transformation
