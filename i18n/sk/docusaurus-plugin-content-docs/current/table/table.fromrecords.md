---
title: Table.FromRecords
---

# Table.FromRecords


Konvertuje zoznam záznamov na tabuľku.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Konvertuje zadaný zoznam záznamov na tabuľku.

-   `records`: Zoznam záznamov, ktoré sa majú konvertovať na tabuľku.
-   `columns`: (Voliteľné) Zoznam názvov stĺpcov tabuľky alebo typ tabuľky.
-   `missingField`: (Voliteľné) Určuje spôsob spracovania chýbajúcich polí v riadku. Použite jednu z nasledujúcich hodnôt:
    -   `MissingField.Error`: Chýbajúce polia spôsobia chybu (predvolené).
    -   `MissingField.UseNull`: Chýbajúce polia sa zahrnú ako `hodnoty null`.
      
    Použitie hodnoty `MissingField.Ignore` v tomto parametri spôsobí chybu.


## Examples

### Example #1
Vytvorte tabuľku zo záznamov, pričom použite názvy polí v záznamoch ako názvy stĺpcov.
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
Vytvorte tabuľku zo záznamov so zadanými stĺpcami a vyberte počet stĺpcov.
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
Vytvorte tabuľku obsahujúcu krstné meno, strednú iniciálu a priezvisko zákazníkov zo zadaných záznamov. Ak niektorá z hodnôt chýba, nahraďte ju `hodnotou null`.
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
