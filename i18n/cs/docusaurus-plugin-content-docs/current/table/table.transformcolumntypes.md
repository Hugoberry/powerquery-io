---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Použije transformace typu ve formátu \{ column, type \} pomocí konkrétní jazykové verze.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as any
) as table
```


## Remarks

Vrátí tabulku aplikováním transformačních operací na zadané sloupce pomocí volitelné jazykové verze.

-   `table`: Vstupní tabulka, která se má transformovat
-   `typeTransformations`: Transformace typů, které se mají použít. Formát pro jednu transformaci je \{ column name, type value \}. Seznam transformací lze použít ke změně typů více než jednoho sloupce najednou. Pokud sloupec neexistuje, dojde k chybě.
-   `culture`: (Volitelné) Jazyková verze, která se má použít při transformaci typů sloupců (například en-US). Pokud je pro `culture` zadán záznam, může obsahovat následující pole:
     -   `Culture`: Jazyková verze, která se má použít při transformaci typů sloupců (například en-US).
    -   `MissingField`: Pokud sloupec neexistuje, vyvolá se chyba, pokud toto pole nezadá alternativní chování (například `MissingField.UseNull` nebo `MissingField.Ignore`).

  Hodnota typu v parametru `typeTransformations` může být `libovolná`, všechny `číselné` typy, `text`, všechny `datum`, `čas`, `datetime`, `datetimezone` a typy `doba trvání`, `logické` nebo `binární`. Typy `seznam`, `záznam`, `tabulka` nebo `funkce` nejsou pro tento parametr platné.  
  
Pro každý sloupec uvedený v `typeTransformations` se obvykle k provedení transformace používá metoda „.From“ odpovídající zadané hodnotě typu. Pokud je například pro sloupec zadána hodnota typu `Currency.Type`, použije se pro každou hodnotu v daném sloupci funkce transformace `Currency.From`.


## Examples

### Example #1
Transformujte číselné hodnoty v prvním sloupci na textové hodnoty.
```powerquery
let
    Source = #table(type table [a = number, b = number],
    {
        {1, 2},
        {3, 4}
    }),
    #"Transform Column" = Table.TransformColumnTypes(
        Source,
        {"a", type text}
    )
in
    #"Transform Column"
```

Result: 
```powerquery
#table(type table [a = text, b = number],
{
    {"1", 2},
    {"3", 4}
})
```


### Example #2
Transformuje data v tabulce na jejich ekvivalenty textu ve francouzštině.
```powerquery
let
    Source = #table(type table [Company ID = text, Country = text, Date = date],
    {
        {"JS-464", "USA", #date(2024, 3, 24)},
        {"LT-331", "France", #date(2024, 10, 5)},
        {"XE-100", "USA", #date(2024, 5, 21)},
        {"RT-430", "Germany", #date(2024, 1,18)},
        {"LS-005", "France", #date(2023, 12, 31)},
        {"UW-220", "Germany", #date(2024, 2, 25)}
    }),
    #"Transform Column" = Table.TransformColumnTypes(
        Source,
        {"Date", type text},
        "fr-FR"
    )
in
    #"Transform Column"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text],
{
    {"JS-464", "USA", "24/03/2024"},
    {"LT-331", "France", "05/10/2024"},
    {"XE-100", "USA", "21/05/2024"},
    {"RT-430", "Germany", "18/01/2024"},
    {"LS-005", "France", "31/12/2023"},
    {"UW-220", "Germany", "25/02/2024"}
})
```


### Example #3
Převede data v tabulce na jejich ekvivalenty německého textu a hodnoty v tabulce na procenta.
```powerquery
let
    Source = #table(type table [Date = date, Customer ID = text, Value = number],
    {
        {#date(2024, 3, 12), "134282", .24368},
        {#date(2024, 5, 30), "44343", .03556},
        {#date(2023, 12, 14), "22", .3834}
    }),
    #"Transform Columns" = Table.TransformColumnTypes(
        Source,
        {{"Date", type text}, {"Value", Percentage.Type}},
        "de-DE")
in
    #"Transform Columns"
```

Result: 
```powerquery
#table(type table [Date = text, Customer ID = text, Value = Percentage.Type],
{
    {"12.03.2024", "134282", .24368},
    {"30.05.2024", "44343", .03556},
    {"14.12.2023", "22", .3834}
})
```


### Example #4
Použijte transformace s hodnotou záznamu pro `culture`.
```powerquery
let
    Source = #table(type table [Company ID = text, Country = text, Date = date],
    {
        {"JS-464", "USA", #date(2024, 3, 24)},
        {"LT-331", "France", #date(2024, 10, 5)},
        {"XE-100", "USA", #date(2024, 5, 21)},
        {"RT-430", "Germany", #date(2024, 1,18)},
        {"LS-005", "France", #date(2023, 12, 31)},
        {"UW-220", "Germany", #date(2024, 2, 25)}
    }),
    #"Transform Column" = Table.TransformColumnTypes(
        Source,
        {{"Date", type text}, {"NewColumn", type number}},
        [Culture="fr-FR", MissingField=MissingField.UseNull]
    )
in
    #"Transform Column"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text, NewColumn = number],
{
    {"JS-464", "USA", "24/03/2024", null},
    {"LT-331", "France", "05/10/2024", null},
    {"XE-100", "USA", "21/05/2024", null},
    {"RT-430", "Germany", "18/01/2024", null},
    {"LS-005", "France", "31/12/2023", null},
    {"UW-220", "Germany", "25/02/2024", null}
})
```




## Category
Table.Transformation
