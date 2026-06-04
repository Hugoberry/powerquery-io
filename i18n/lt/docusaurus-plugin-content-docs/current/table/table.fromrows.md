---
title: Table.FromRows
---

# Table.FromRows


Sukuriama lentelė iš eilučių reikšmių ir pasirinktinių stulpelių sąrašo.


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Remarks

Iš sąrašo `rows`, kuriame kiekvienas sąrašo elementas yra vidinis sąrašas su vienos eilutės stulpelių reikšmėmis, sukuriama lentelė. Gali būti nurodytas `columns` pasirenkamas stulpelių pavadinimų sąrašas, lentelės tipas arba stulpelių skaičius.


## Examples

### Example #1
Pateikiama lentelė su stulpeliu \[CustomerID\] su reikšmėmis \{1, 2\}, su stulpeliu \[Name\] su reikšmėmis \{"Bob", "Jim"\} ir su stulpeliu \[Phone\] su reikšmėmis \{"123-4567", "987-6543"\}.
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
Pateikiama lentelė su stulpeliu \[CustomerID\] su reikšmėmis \{1, 2\}, su stulpeliu \[Name\] su reikšmėmis \{"Bob", "Jim"\} ir su stulpeliu \[Phone\] su reikšmėmis \{"123-4567", "987-6543"\}, kur \[CustomerID\] yra skaičius, o \[Name\] ir \[Phone\] tekstas.
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
