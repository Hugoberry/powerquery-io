---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Primenjuje transformacije tipa u obliku \{ column, type \} pomoću određene kulture.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as any
) as table
```


## Remarks

Vraća tabelu primenom operacija transformacije na navedene kolone korišćenjem opcionalne kulture.

-   `table`: Ulazna tabela za transformaciju.
-   `typeTransformations`: Transformacije tipa koje treba primeniti. Format za jednu transformaciju je \{ column name, type value \}. Lista transformacija može da se koristi za promenu tipova više kolona odjednom. Ako kolona ne postoji, dolazi do greške.
-   `culture`: (Opcionalno) Kultura koju treba koristiti prilikom transformacije tipova kolona (na primer, „en-US”). Ako je zapis naveden za `culture`, može da sadrži sledeća polja:
    -   `Culture`: Kultura koja će se koristiti prilikom transformacije tipova kolona (na primer, "en-US").
    -   `MissingField`: Ako kolona ne postoji, dolazi do greške osim ako ovo polje ne obezbedi alternativno ponašanje (na primer, `MissingField.UseNull` ili `MissingField.Ignore`).

Vrednost tipa u parametru `typeTransformations` može da bude `any`, svi od `number` tipova, `text`, svi od `date`, `time`, `datetime`, `datetimezone` i `duration` tipova, `logical` ili `binary`. `list`, `record`, `table`, ili `function` tipovi nisu važeći za ovaj parametar.  
  
Za svaku kolonu navedenu u `typeTransformations`, metoda „.From“ koja odgovara navedenoj vrednosti tipa obično se koristi za izvršavanje transformacije. Primera radi, ako je za kolonu navedena vrednost `Currency.Type`, primenjuje se funkcija transformacije `Currency.From` na svaku vrednost u toj koloni.


## Examples

### Example #1
Pretvorite vrednosti brojeva u prvoj koloni u tekstualne vrednosti.
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
Transformišite datume u tabeli u njihove tekstualne isteke u francuskom.
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
Transformišite datume u tabeli u njihove tekstualne isteke u nemačkom, a vrednosti u tabeli u procente.
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
Primenite transformacije sa vrednošću zapisa za `culture`.
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
