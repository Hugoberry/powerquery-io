---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Taikoma (-os) \{ column, type \} formos tipo transformacija (-os) naudojant konkrečią kultūrą.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as any
) as table
```


## Remarks

Pateikiama lentelė taikant transformavimo operacijas nurodytiems stulpeliams ir naudojant pasirinktinę kultūrą.

-   `table`: įvesties lentelė, kurią reikia transformuoti.
-   `typeTransformations`: taikomų transformacijų tipas. Vienos transformacijos formatas yra \{ column name, type value \}. Transformacijų sąrašas gali būti naudojamas kelių stulpelių tipams keisti vienu metu. Jei stulpelio nėra, pateikiama klaida.
-   `culture`: (pasirenkama) kultūra, naudojama stulpelių tipams (pvz., „en-US“) transformuoti. Jei nurodytas `culture` įrašas, jame gali būti šie laukai:
    -   `Culture`: kultūra, naudojama transformuojant stulpelių tipus (pvz., „en-US“).
    -   `MissingField`: jei stulpelio nėra, pateikiama klaida, nebent šis laukas pateikia alternatyvų veikimo būdą (pvz., `MissingField.UseNull` arba `MissingField.Ignore`).

Parametro `typeTransformations` tipo reikšmė gali būti `any`, visų `number` tipai, `text`, visi `date`, `time`, `datetime`, `datetimezone` ir `duration` tipai, `logical` arba `binary`. Šiam parametrui tokie tipai, kaip `list`, `record`, `table` arba `function`, neleistini.  
  
Kiekvienam stulpeliui, nurodytam `typeTransformations`, paprastai naudojamas „.From“ metodas, atitinkantis nurodytą tipo reikšmę, kad būtų atlikta transformacija. Pavyzdžiui, jei stulpeliui nurodyta `Currency.Type` tipo reikšmė, transformavimo funkcija `Currency.From` taikoma kiekvienai to stulpelio reikšmei.


## Examples

### Example #1
Transformuoja pirmojo stulpelio skaitines reikšmes į tekstines reikšmes.
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
Transformuokite lentelėje esančias datas į prancūzų kalbos teksto atitikmenis.
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
Transformuokite lentelėje esančias datas į vokiečių kalbos teksto atitikmenis, o lentelėje esančias reikšmes – į procentus.
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
Taikyti transformacijas su `culture` įrašo reikšme.
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
