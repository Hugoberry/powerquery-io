---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Een kopie van een rij voor elke waarde in de lijst maken aan de hand van een kolom met lijsten in een tabel.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

Als een `table` waarbij `column` een lijst met waarden bevat, de lijst in een rij voor elke waarde splitsen. Waarden in de andere kolommen worden gedupliceerd in elke nieuwe rij die wordt gemaakt. Met deze functie kunnen geneste tabellen ook worden uitgebreid door deze te behandelen als lijsten met records.


## Examples

### Example #1
De lijstkolom \[Name\] splitsen.
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
De geneste tabelkolom \[Components\] splitsen.
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
