---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Meghatározott kulturális környezet használatával alkalmazza az \{ column, type \} jellegű típusátalakításokat.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as any
) as table
```


## Remarks

Egy táblát ad vissza, amelyet az átalakítási műveletek a megadott oszlopokon való alkalmazásával hoz létre, egy opcionális kulturális beállítással.

-   `table`: Az átalakítandó bemeneti tábla.
-   `typeTransformations`: Az alkalmazandó típusátalakítások. Egyetlen átalakítás formátuma \{ column name, type value \}. Az átalakítások listája lehetővé teszi több oszlop típusának egyidejű módosítását. Ha egy oszlop nem létezik, hiba lép fel.
-   `culture`: (Opcionális) Az oszloptípusok átalakításakor használandó kulturális beállítás (például „hu-HU”). Ha rekord van megadva a(z) `culture` paraméterhez, az a következő mezőket tartalmazhatja:
    -   `Culture`: Az oszloptípusok átalakításakor használandó kulturális beállítás (például „hu-HU”).
    -   `MissingField`: Ha egy oszlop nem létezik, hiba lép fel, hacsak ez a mező nem ad meg alternatív viselkedést (például `MissingField.UseNull` vagy `MissingField.Ignore`).

A(z) `typeTransformations` paraméterben megadott típusérték lehet `any` (bármelyik), az összes `number` (szám) típus, `text` (szöveg), az összes `date` (dátum), `time` (idő), `datetime`, `datetimezone`, valamint `duration` (időtartam) típus, `logical` (logikai) vagy `binary` (bináris). A `list` (lista), `record` (rekord), `table` (tábla) és `function` (függvény) típusok nem érvényesek ennél a paraméternél.  
  
A(z) `typeTransformations`felsorolt minden egyes oszlopa esetében a „From” metódust általában az átalakítás végrehajtására használják. Ha például `Currency.Type` típusú értéket ad meg egy oszlophoz, a `Currency.From` átalakítási függvény az adott oszlop minden értékére alkalmazva lesz.


## Examples

### Example #1
Az első oszlop számértékeinek átalakítása szöveges értékekké.
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
A táblázat dátumainak átalakítása francia nyelvű ekvivalenssé.
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
A táblázat dátumainak átalakítása német nyelvű ekvivalenssé, a táblázat értékeinek pedig százalékértékekké.
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
Átalakítások alkalmazása rekordértékkel a következőhöz: `culture`.
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
