---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Ako je data kolona sa listama u tabeli, napravite kopiju reda za svaku vrednost iz odgovarajuće liste.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

S obzirom na`table` pri čemu `column` sadrži listu vrednosti, deli listu na red za svaku vrednost. Vrednosti u ostalim kolonama su duplirane u svakom novom kreiranom redu. Ova funkcija takođe može da proširi ugnežđene tabele tako što ih tretira kao liste zapisa.


## Examples

### Example #1
Podeli kolonu liste \[Name\].
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
Razdeli ugnežđenu kolonu tabele \[Components\].
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
