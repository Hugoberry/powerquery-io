---
title: Table.FromRecords
---

# Table.FromRecords


Pretvori seznam zapisov v tabelo.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Pretvori navedeni seznam zapisov v tabelo.

-   `records`: seznam zapisov, ki jih želite pretvoriti v tabelo.
-   `columns`: (izbirno) seznam imen stolpcev tabele ali vrsta tabele.
-   `missingField`: (izbirno) določa, kako obravnavati manjkajoča polja v vrstici. Uporabite eno od naslednjih vrednosti:
    -   `MissingField.Error`: vsako manjkajoče polje ustvari napako (privzeto).
    -   `MissingField.UseNull`: vsako manjkajoče polje se vključi kot vrednost `null`.
      
    Uporaba `MissingField.Ignore` v tem parametru vrne napako.


## Examples

### Example #1
Ustvarite tabelo iz zapisov in pri tem za imena stolpcev uporabite imena polj zapisov.
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
Ustvarite tabelo iz zapisov z vnesenimi stolpci in izberite stolpce s števili.
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
Ustvarite tabelo, ki vsebuje ime, začetnico srednjega imena in priimek strank iz določenih zapisov. Če katera od vrednosti manjka, jo nadomestite z vrednostjo `null`.
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
