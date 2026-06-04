---
title: Table.FromRecords
---

# Table.FromRecords


Převede seznam záznamů na tabulku.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Převede zadaný seznam záznamů na tabulku.

-   `records`: Seznam záznamů, které se mají převést na tabulku
-   `columns`: (Volitelné) Seznam názvů sloupců tabulky nebo typ tabulky
-   `missingField`: (Volitelné) Určuje, jak zpracovat chybějící pole v řádku. Použijte jednu z následujících hodnot:
     -   `MissingField.Error`: Jakákoli chybějící pole způsobí chybu (výchozí).
    -   `MissingField.UseNull`: Všechna chybějící pole jsou zahrnuta jako hodnoty `null`.
      
    Použití `MissingField.Ignore` v tomto parametru způsobí chybu.


## Examples

### Example #1
Vytvoří tabulku ze záznamů a názvy polí záznamů použije jako názvy sloupců.
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
Vytvoří tabulku ze záznamů se zadanými sloupci a vybere číselné sloupce.
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
Vytvořte tabulku obsahující jméno, iniciálu prostředního jména a příjmení zákazníků ze zadaných záznamů. Pokud některá z hodnot chybí, nahraďte ji hodnotou `null`.
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
