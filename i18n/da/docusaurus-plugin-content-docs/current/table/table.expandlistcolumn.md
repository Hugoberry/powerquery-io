---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Når du har en kolonne med lister i en tabel, skal du oprette en kopi af en række for hver værdi på listen.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

Hvis en `table`, hvor `column` indeholder en liste af værdier, opdeles listen i en række for hver værdi. Værdierne i de andre kolonner duplikeres i hver ny række, der oprettes. Denne funktion kan også udvide indlejrede tabeller ved at behandle dem som lister over poster.


## Examples

### Example #1
Opdel listekolonnen \[Name\].
```powerquery
Table.ExpandListColumn(
    Table.FromRecords({[Name = {"Bob", "Jim", "Paul"}, Discount = .15]}),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Discount = 0.15],
    [Name = "Jim", Discount = 0.15],
    [Name = "Paul", Discount = 0.15]
})
```


### Example #2
Opdel den indlejrede tabelkolonne \[Components\].
```powerquery
Table.ExpandListColumn(
    #table(
        {"Part", "Components"},
        {
            {"Tool", #table({"Name", "Quantity"}, {{"Thingamajig", 2}, {"Widget", 3}})}
        }
    ),
    "Components"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Part = "Tool", Components = [Name = "Thingamajig", Quantity = 2]],
    [Part = "Tool", Components = [Name = "Widget", Quantity = 3]]
})
```




## Category
Table.Transformation
