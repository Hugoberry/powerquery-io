---
title: Table.FromRecords
---

# Table.FromRecords


Konvertuje listu zapisa u tabelu.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Konvertuje navedenu listu zapisa u tabelu.

-   `records`: Lista zapisa za konvertovanje u tabelu.
-   `columns`: (Opcionalno) Lista imena kolona tabele ili tip tabele.
-   `missingField`: (Opcionalno) Navodi kako da rukujete poljima koja nedostaju u redu. Koristite jednu od sledećih vrednosti:
    -   `MissingField.Error`: Sva polja koja nedostaju izazivaju grešku (podrazumevano).
    -   `MissingField.UseNull`: Sva polja koja nedostaju su uključena kao `null` vrednosti.
      
    Korišćenje kôda `MissingField.Ignore` u ovom parametru daje grešku.


## Examples

### Example #1
Kreirajte tabelu od zapisa koristeći imena polja zapisa kao imena kolona.
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
Kreirajte tabelu od zapisa pomoću otkucanih kolona i izaberite kolone sa brojevima.
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
Napravite tabelu sa imenom, srednjim inicijalom i prezimenom klijenata iz navedenih zapisa. Ako neka od vrednosti nedostaje, zamenite je sa `null`.
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
