---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Kun annetaan taulukon sarakeluettelo, luo kopio rivistä kullekin arvolle sen luettelossa.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

Kun annetaan `table`, jossa `column` sisältää arvoluettelon, jakaa luettelon riviksi kullekin arvolle. Muiden sarakkeiden arvot kopioidaan kullakin uudella luodulla rivillä. Tämä funktio voi myös laajentaa sisäkkäisiä taulukoita käsittelemällä niitä tietueluetteloina.


## Examples

### Example #1
Jaa luettelosarake \[Name\].
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
Jaa sisäkkäinen taulukkosarake \[komponentteihin\].
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
