---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Egy táblának egy adott listaoszlopából a listája minden egyes értékéhez létrehozza egy sor másolatát.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

Adott `table` esetében, amelyben `column`értéklistát tartalmaz, felosztja a listát egy sorra az egyes értékekhez. A többi oszlopban lévő értékek minden létrehozott új sorban duplikálva jelennek meg. Ez a függvény úgy is kibonthatja a beágyazott táblákat, hogy rekordlistákként kezeli őket.


## Examples

### Example #1
A(z) \[Name\] listaoszlop felosztása.
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
Beágyazott tábla oszlopának felosztása: \[Components\].
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
