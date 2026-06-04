---
title: Table.FromRecords
---

# Table.FromRecords


Muuntaa tietueluettelon taulukoksi.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Muuntaa määritetyn tietueluettelon taulukoksi.

-   `records`: Taulukoksi muunnettavien tietueiden luettelo.
-   `columns`: (Valinnainen) Taulukon sarakkeiden nimien luettelo tai taulukon tyyppi.
-   `missingField`: (valinnainen) Määrittää, miten rivin puuttuvat kentät käsitellään. Käytä jotakin seuraavista arvoista:
    -   `MissingField.Error`: Puuttuvat kentät tuottavat virheen (oletus).
    -   `MissingField.UseNull`: Puuttuvat kentät sisällytetään `null`\-arvoina.
      
    Tämän parametrin `MissingField.Ignore` aiheuttaa virheen.


## Examples

### Example #1
Luo taulukko tietueista käyttäen tietuekenttien nimiä sarakkeiden niminä.
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```

Result: 
```powerquery
#table(type table[CustomerID = any, Name = any, Phone = any],
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```


### Example #2
Luo taulukko tietueista käyttäen kirjoitettuja sarakkeita ja valitse lukusarakkeet.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[CustomerID = 1, Name = "Bob"]},
        type table[CustomerID = Number.Type, Name = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"CustomerID"}
```


### Example #3
Luo taulukko, joka sisältää määritettyjen tietueiden asiakkaiden etunimen, toisen alkukirjaimen ja sukunimen. Jos jokin arvo puuttuu, korvaa se arvolla `null`.
```powerquery
Table.FromRecords({
        [CustomerID = 1, FirstName = "Bob", MiddleInitial = "C", LastName = "Smith"],
        [CustomerID = 2, FirstName = "Sarah", LastName = "Jones"],
        [CustomerID = 3, FirstName = "Harry", MiddleInitial = "H"]
    },
    type table [FirstName = nullable text, MiddleInitial = nullable text, LastName = nullable text],
    MissingField.UseNull)
```

Result: 
```powerquery
#table(type table[FirstName = text, MiddleInitial = text, LastName = text],
{
    {"Bob", "C", "Smith"},
    {"Sarah", null, "Jones"},
    {"Harry", "H", null}
})
```




## Category
Table.Table construction
