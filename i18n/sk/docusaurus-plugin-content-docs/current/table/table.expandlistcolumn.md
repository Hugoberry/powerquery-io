---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


S daným stĺpcom zoznamov v tabuľke vytvorte kópiu riadka pre každú hodnotu v príslušnom zozname.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

Vzhľadom na `table`, kde `column` obsahuje zoznam hodnôt, rozdelí zoznam do riadka pre každú hodnotu. Hodnoty v ostatných stĺpcoch sa duplikujú v každom novom vytvorenom riadku. Táto funkcia môže tiež rozbaliť vnorené tabuľky tak, že ich spracuje ako zoznamy záznamov.


## Examples

### Example #1
Rozdeliť stĺpec zoznamu \[Name\].
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
Rozdeliť stĺpec vnorenej tabuľky \[Súčasti\].
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
