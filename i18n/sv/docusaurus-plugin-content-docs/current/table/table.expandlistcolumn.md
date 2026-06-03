---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Skapa en kopia av en rad för varje värde i dess lista baserat på en kolumn med listor i en tabell.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

Med en `table` där `column` innehåller en lista med värden, delas listan upp i en rad för varje värde. Värdena i de andra kolumnerna dupliceras för varje ny rad som skapas. Med den här funktionen kan även kapslade tabeller expanderas genom att de behandlas som listor med poster.


## Examples

### Example #1
Dela upp listkolumnen \[Name\].
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
Dela den kapslade tabellkolumnen \[Komponenter\].
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
