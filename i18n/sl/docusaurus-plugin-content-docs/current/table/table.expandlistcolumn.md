---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Za navedeni stolpec seznamov v tabeli ustvarite kopijo vrstice za vsako vrednost na seznamu.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

Funkcija `table`, kjer `column` vsebuje seznam vrednosti, razdeli seznam v vrstico za posamezno vrednost. Vrednosti v drugih stolpcih so podvojene v vsaki ustvarjeni novi vrstici. Ta funkcija lahko razširi tudi ugnezdene tabele tako, da jih obravnava kot sezname zapisov.


## Examples

### Example #1
Razdelite stolpec seznama \[Name\].
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
Razdelite stolpec ugnezdene tabele \[Components\].
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
