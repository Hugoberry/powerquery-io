---
title: Table.FromRows
---

# Table.FromRows


## Description

Iš eilučių reikšmių ir pasirenkamų stulpelių sąrašo sukuriama lentelė


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Details

Iš sąrašo <code>rows</code>, kuriame kiekvienas sąrašo elementas yra vidinis sąrašas su vienos eilutės stulpelių reikšmėmis, sukuriama lentelė. Gali būti nurodytas <code>columns</code> pasirenkamas stulpelių pavadinimų sąrašas, lentelės tipas arba stulpelių skaičius.


## Examples

### Example #1 
Pateikiama lentelė su stulpeliu [CustomerID] su reikšmėmis \{1, 2}, su stulpeliu [Name] su reikšmėmis \{&#34;Bob&#34;, &#34;Jim&#34;} ir su stulpeliu [Phone] su reikšmėmis \{&#34;123-4567&#34;, &#34;987-6543&#34;}.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
Pateikiama lentelė su stulpeliu [CustomerID] su reikšmėmis \{1, 2}, su stulpeliu [Name] su reikšmėmis \{&#34;Bob&#34;, &#34;Jim&#34;} ir su stulpeliu [Phone] su reikšmėmis \{&#34;123-4567&#34;, &#34;987-6543&#34;}, kur [CustomerID] yra skaičius, o [Name] ir [Phone] tekstas.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    type table [CustomerID = number, Name = text, Phone = text]
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```




## Category
Table.Table construction
