---
title: Table.FromColumns
---

# Table.FromColumns


## Description

Sukuriama lentelė iš stulpelių ir nurodytų reikšmių sąrašo.


## Syntax

```powerquery
Table.FromColumns(
    lists as list,
    optional columns as any
) as table
```


## Details

Sukuriama tipo <code>columns</code> lentelė iš sąrašo <code>lists</code>, kurioje yra įdėtieji sąrašai su stulpelių pavadinimais ir reikšmėmis.    Jei vienuose stulpeliuose yra daugiau reikšmių nei kituose, trūkstamos reikšmės bus užpildytos numatytąja reikšme null (jei stulpeliai gali būti neapibrėžti).


## Examples

### Example #1 
Pateikiama lentelė iš klientų vardų sąrašo. Kiekviena klientų sąrašo elemento reikšmė tampa eilutės reikšme, o kiekvienas sąrašas tampa stulpeliu.
```powerquery
Table.FromColumns({
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2, Column3 = 3],
    [Column1 = "Bob", Column2 = "Jim", Column3 = "Paul"],
    [Column1 = "123-4567", Column2 = "987-6543", Column3 = "543-7890"]
})
```


### Example #2 
Kurkite lentelę iš nurodyto stulpelių sąrašo ir stulpelių pavadinimų sąrašo.
```powerquery
Table.FromColumns(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"},
        {3, "Paul", "543-7890"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = 2, Phone = 3],
    [CustomerID = "Bob", Name = "Jim", Phone = "Paul"],
    [CustomerID = "123-4567", Name = "987-6543", Phone = "543-7890"]
})
```


### Example #3 
Sukurkite lentelę su skirtingu stulpelių skaičiumi eilutėje. Trūkstamos eilutės reikšmė yra NULL.
```powerquery
Table.FromColumns(
    {
        {1, 2, 3},
        {4, 5},
        {6, 7, 8, 9}
    },
    {"column1", "column2", "column3"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [column1 = 1, column2 = 4, column3 = 6],
    [column1 = 2, column2 = 5, column3 = 7],
    [column1 = 3, column2 = null, column3 = 8],
    [column1 = null, column2 = null, column3 = 9]
})
```




## Category
Table.Table construction
