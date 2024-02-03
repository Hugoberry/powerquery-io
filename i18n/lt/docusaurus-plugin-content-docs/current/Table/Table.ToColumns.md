---
title: Table.ToColumns
---

# Table.ToColumns


## Description

Sukuriamas stulpelio reikšmių iš lentelės įdėtųjų sąrašų sąrašas.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Details

Sukuriamas įdėtųjų sąrašų sąrašas iš lentelės, <code>table</code>.  Kiekvienas sąrašo elementas yra vidinis sąrašas, kuriame yra stulpelių reikšmės.


## Examples

### Example #1 
Sukurkite stulpelio reikšmių sąrašą iš lentelės.
```powerquery
Table.ToColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
{{1, 2}, {"Bob", "Jim"}, {"123-4567", "987-6543"}}
```




## Category
Table.Conversions
