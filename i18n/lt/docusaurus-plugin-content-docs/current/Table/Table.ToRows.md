---
title: Table.ToRows
---

# Table.ToRows


## Description

Sukuriamas eilutės reikšmių iš lentelės įdėtųjų sąrašų sąrašas.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Details

Sukuriamas įdėtųjų sąrašų sąrašas iš lentelės <code>table</code>.  Kiekvienas sąrašo elementas yra vidinis sąrašas, kuriame yra eilučių reikšmės.


## Examples

### Example #1 
Sukurkite sąrašą eilučių reikšmių iš lentelės.
```powerquery
Table.ToRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
}
```




## Category
Table.Conversions
