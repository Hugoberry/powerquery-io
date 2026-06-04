---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Ņemot vērā tabulā sniegto sarakstu kolonnu, izveidojiet rindas kopiju katrai vērtībai tās sarakstā.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

Ja `table` ir `column`ir vērtību saraksts, saraksts tiek sadalīts rindā katrai vērtībai. Citās kolonnās pārējās vērtības tiek dublētas katrā jaunizveidotajā rindā. Šī funkcija var arī izvērst ligzdtabulas, apstrādājot tās kā ierakstu sarakstus.


## Examples

### Example #1
Sadaliet saraksta kolonnu \[Name\].
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
Sadalīt ligzdtabulas kolonnu \[Components\].
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
