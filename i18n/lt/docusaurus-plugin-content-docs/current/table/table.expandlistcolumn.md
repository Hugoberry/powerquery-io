---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Pagal lentelės sąrašų stulpelį sukurkite kiekvienos reikšmės sąraše eilutės kopiją.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

Pagal `table`, kurioje `column` yra reikšmių sąrašas, sąrašas suskaidomas į kiekvienos reikšmės eilutę. Kitų stulpelių reikšmės dubliuojamos kiekvienoje sukurtoje naujoje eilutėje. Ši funkcija taip pat gali išplėsti įdėtas lenteles laikant jas įrašų sąrašais.


## Examples

### Example #1
Išskaidyti sąrašo stulpelį \[Name\].
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
Skaidykite įdėtosios lentelės stulpelį \[Components\].
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
