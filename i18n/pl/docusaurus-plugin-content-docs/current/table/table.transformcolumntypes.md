---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Stosuje przekształcenia typów w formie \{ column, type \}, używając określonej kultury.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as any
) as table
```


## Remarks

Zwraca tabelę, stosując operacje przekształcania do określonych kolumn przy użyciu kultury opcjonalnej.

-   `table`: tabela danych wejściowych do przekształcenia.
-   `typeTransformations`: przekształcenia typu do zastosowania. Format pojedynczego przekształcenia to \{ column name, type value \}. Lista przekształceń może służyć do zmieniania typów więcej niż jednej kolumny naraz. Jeśli kolumna nie istnieje, zostanie zgłoszony błąd.
-   `culture`: (opcjonalnie) kultura używana podczas przekształcania typów kolumn (na przykład „en-US”). Jeśli rekord jest określony dla `culture`, może zawierać następujące pola:
    -   `Culture`: kultura, której należy używać podczas przekształcania typów kolumn (na przykład „en-US”).
    -   `MissingField`: jeśli kolumna nie istnieje, generowany jest błąd, chyba że to pole zapewnia alternatywne zachowanie (na przykład `MissingField.UseNull` lub `MissingField.Ignore`).

Wartość typu w parametrze `typeTransformations` może być `any`, wszystkie typy `number`, `text`, wszystkie typy `date`, `time`, `datetime`, `datetimezone` oraz typy `duration`, `logical` lub `binary`. Typy `list`, `record`, `table` lub `function` są nieprawidłowe dla tego parametru.  
  
Dla każdej kolumny wymienionej w `typeTransformations` do przeprowadzenia transformacji używana jest zazwyczaj metoda „.From” odpowiadająca określonej wartości typu. Na przykład, jeśli dla kolumny podano wartość typu `Currency.Type`, do każdej wartości w tej kolumnie zostanie zastosowana funkcja przekształcania `Currency.From`.


## Examples

### Example #1
Przekształć wartości liczbowe w pierwszej kolumnie na wartości tekstowe.
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
Przekształć daty w tabeli na odpowiedniki tekstu francuskiego.
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
Przekształć daty w tabeli na odpowiedniki tekstu niemieckiego, a wartości w tabeli na wartości procentowe.
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
Zastosuj przekształcenia z wartością rekordu dla `culture`.
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
