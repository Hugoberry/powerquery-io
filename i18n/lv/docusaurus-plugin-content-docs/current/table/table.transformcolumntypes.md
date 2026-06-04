---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Tiek lietota formāta \{ column, type \} tipa pārvēršana, izmantojot konkrētu kultūru.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as any
) as table
```


## Remarks

Atgriež tabulu, lietojot transformācijas operācijas norādītajās kolonnās, izmantojot neobligātu kultūru.

-   `table`: ievades tabula, kas jātransformē.
-   `typeTransformations`: tipa transformācijas, kas jāpiemēro. Vienas transformācijas formāts ir \{ column name, type value \}. Transformāciju sarakstu var izmantot, lai vienlaikus mainītu vairāku kolonnu tipus. Ja kolonna nepastāv, tiek parādīta kļūda.
-   `culture`: (neobligāti) kultūra, ko izmantot, pārveidojot kolonnu tipus (piemēram, “lv-LV”). Ja `culture`ieraksts ir norādīts, tajā var būt šādi lauki:
    -   `Culture`: kultūra, ko izmantot, pārveidojot kolonnu tipus (piemēram, “lv-LV”).
    -   `MissingField`: Ja kolonna nepastāv, tiek parādīta kļūda, ja vien šis lauks nenodrošina alternatīvu darbību (piemēram, `MissingField.UseNull` vai `MissingField.Ignore`).

Parametra `typeTransformations` tipa vērtība var būt `any`, visi `number` tipi, `text`, visi `date`, `time`, `datetime`, `datetimezone` un `duration` tipi, `logical` vai `binary`. Šie `list`, `record`, `table` vai `function` tipi nav derīgi šim parametram.  
  
Katrai kolonnai, kas norādīta `typeTransformations`, parasti tiek izmantota metode “.From”, kas atbilst norādītajai tipa vērtībai, lai veiktu transformāciju. Piemēram, ja kolonnai ir norādīta `Currency.Type` tipa vērtība, katrai šīs kolonnas vērtībai tiek lietota transformācijas funkcija `Currency.From`.


## Examples

### Example #1
Pārveidot pirmās kolonnas skaitliskās vērtības par teksta vērtībām.
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
Pārveidot datumus tabulā par tiem franču valodas teksta ekvivalentiem.
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
Pārveidot datumus tabulā par tiem vācu valodas teksta ekvivalentiem, bet tabulas vērtības tiek pārveidotas par procentuālām vērtībām.
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
Lietot transformācijas ar ieraksta vērtību `culture`.
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
