---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Použije transformácie typov vo formáte \{ column, type \} pomocou špecifickej kultúry.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as any
) as table
```


## Remarks

Vráti tabuľku použitím operácií transformácie na zadané stĺpce pomocou voliteľnej jazykovej verzie.

-   `table`: Vstupná tabuľka na transformáciu.
-   `typeTransformations`: Transformácie typu na použitie. Formát jednej transformácie je \{ column name, type value \}. Zoznam transformácií možno použiť na zmenu typov viacerých stĺpcov naraz. Ak stĺpec neexistuje, zobrazí sa chyba.
-   `culture`: (Voliteľné) Jazyková verzia na použitie pri transformácii typov stĺpcov (napríklad en-US). Ak je pre `culture` špecifikovaný záznam, môže obsahovať nasledujúce polia:
    -   `Culture`: Jazyková verzia na použitie pri transformácii typov stĺpcov (napríklad en-US).
    -   `MissingField`: Ak stĺpec neexistuje, vygeneruje sa chyba, pokiaľ toto pole neumožňuje alternatívne správanie (napríklad `MissingField.UseNull` alebo `MissingField.Ignore`).

Hodnota typu v parametri `typeTransformations` môže byť `any`, všetky typy `number` `text`, všetky typy `date`, `time`, `datetime`, `datetimezone` a `duration`, `logical` alebo `binary`. Typy `list`, `record`, `table` alebo `function` nie sú pre tento parameter platné.  
  
Pre každý stĺpec uvedený v `typeTransformations`, sa na vykonanie transformácie zvyčajne použije metóda ".From" zodpovedajúca zadanej hodnote typu. Ak je napríklad pre stĺpec zadaná hodnota typu `Currency.Type`, transformačná funkcia `Currency.From` sa použije na každú hodnotu v tomto stĺpci.


## Examples

### Example #1
Transformujte číselné hodnoty v prvom stĺpci na textové hodnoty.
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
Transformuje dátumy v tabuľke na ich francúzske textové ekvivalenty.
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
Transformuje dátumy v tabuľke na ich nemecké textové ekvivalenty a hodnoty v tabuľke na percentá.
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
Uplatní transformácie s hodnotou záznamu pre `culture`.
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
