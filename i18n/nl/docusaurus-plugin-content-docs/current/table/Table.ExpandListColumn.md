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

Aan de hand van <code>table</code>, waar <code>column</code> een lijst met waarden is, de lijst in een rij voor elke waarde splitsen. Waarden in de andere kolommen worden naar elke nieuwe rij gedupliceerd.


## Examples

### Example #1 
De lijstkolom [Name] in de tabel splitsen.
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




## Category
Table.Transformation
