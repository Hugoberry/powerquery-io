---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Aplică transformările de tip de forma \{ column, type \} utilizând o anumită cultură.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as any
) as table
```


## Remarks

Returnează un tabel aplicând operațiile de transformare la coloanele specificate utilizând o cultură opțională.

-   `table`: Tabelul de intrare de transformat.
-   `typeTransformations`: Tipul de transformări de aplicat. Formatul pentru o singură transformare este \{ column name, type value \}. O listă de transformări poate fi utilizată pentru a modifica tipurile mai multor coloane simultan. Dacă o coloană nu există, se declanșează o eroare.
-   `culture`: (Opțional) Cultura de utilizat la transformarea tipurilor de coloane (de exemplu, „en-US”). Dacă se specifică o înregistrare pentru `culture`, aceasta poate conține următoarele câmpuri:
    -   `Culture`: Cultura de utilizat la transformarea tipurilor de coloane (de exemplu, „ro-RO”).
    -   `MissingField`: Dacă nu există o coloană, se declanșează o eroare, mai puțin în cazul în care acest câmp furnizează un comportament alternativ (de exemplu, `MissingField.UseNull` sau `MissingField.Ignore`).

Valoarea tipului din parametrul `typeTransformations` poate fi `any`, toate tipurile de `number`, `text`, toate tipurile de `date`, `time`, `datetime`, `datetimezone` și `duration`, `logical` sau `binary`. Tipurile `list`, `record`, `table` sau `function` nu sunt valide pentru acest parametru.  
  
Pentru fiecare coloană listată în `typeTransformations`, metoda „.From” corespunzătoare valorii de tip specificate este utilizată, de obicei, pentru a efectua transformarea. De exemplu, dacă se oferă o valoare de tip `Currency.Type` pentru o coloană, funcția de transformare `Currency.From` este aplicată fiecărei valori din coloana respectivă.


## Examples

### Example #1
Transformați valorile numerice din prima coloană în valori text.
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
Transformați datele din tabel în echivalente de text francez.
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
Transformați datele din tabel în echivalente de text pentru germană, iar valorile din tabel în procente.
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
Aplicați transformările cu o valoare de înregistrare pentru `culture`.
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
