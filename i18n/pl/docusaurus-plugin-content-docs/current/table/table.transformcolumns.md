---
title: Table.TransformColumns
---

# Table.TransformColumns


Przekształca wartości co najmniej jednej kolumny.


## Syntax

```powerquery
Table.TransformColumns(
    table as table,
    transformOperations as list,
    optional defaultTransformation as function,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Przekształca określoną tabelę, stosując każdą operację na kolumnach z listy.

-   `table`: tabela do przekształcenia.
-   `transformOperations`: przekształcenia do wykonania w tabeli. Format tego parametru to \{ column name, transformation \} lub \{ column name, transformation, new column type \}.
-   `defaultTransformation`: (opcjonalnie) domyślne przekształcenie zastosowane do wszystkich kolumn niewymienionych w elementach `transformOperations`.
-   `missingField`: (opcjonalnie) określa oczekiwaną akcję dla brakujących wartości. Jeśli kolumna wymieniona w elemencie `transformOperations` nie istnieje, jest zgłaszany błąd (`MissingField.Error`), chyba że ten parametr określa inną opcję. Użyj jednej z następujących wartości:
    -   `MissingField.UseNull`: brakujące pola są dołączane jako wartości `null`.
    -   `MissingField.Ignore`: wszystkie brakujące pola są ignorowane.


## Examples

### Example #1
Przekształć wartości tekstowe w kolumnie \[A\] na wartości liczbowe, a wartości liczbowe w kolumnie \[B\] na wartości tekstowe.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {
        {"A", Number.FromText},
        {"B", Text.From}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "2"],
    [A = 5, B = "10"]
})
```


### Example #2
Przekonwertuj wartości liczbowe w brakującej kolumnie \[X\] na wartości tekstowe, domyślnie ustawiając wartość `null` dla kolumn, które nie istnieją.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2, X = null],
    [A = "5", B = 10, X = null]
})
```


### Example #3
Zwiększ wartości liczbowe w kolumnie \[B\] i przekonwertuj je na wartości tekstowe oraz przekonwertuj wszystkie pozostałe kolumny na liczby.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"B", each Text.From(_ + 1), type text},
    Number.FromText
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "3"],
    [A = 5, B = "11"]
})
```


### Example #4
Przenieś zadania konserwacji zaplanowanej, które występują w dniu święta w USA, na następny dzień lub, jeśli święto przypada w piątek, na kolejny poniedziałek.
```powerquery
let
    MaintenanceSchedule = #table(type table [Task = text, Date = date],
    {
        {"HVAC Check", #date(2025, 7, 10)},         // Not a holiday
        {"Window Washing", #date(2025, 9, 1)},      // Labor Day
        {"Fire Drill", #date(2025, 9, 17)},         // Not a holiday
        {"Light Replacement", #date(2025, 11, 27)}  // Thanksgiving
    }),
    USHolidays = {
        #date(2025, 1, 1),   // New Year's Day
        #date(2025, 7, 4),   // Independence Day
        #date(2025, 9, 1),   // Labor Day
        #date(2025, 11, 27), // Thanksgiving
        #date(2025, 12, 25)  // Christmas
    },
    AdjustedSchedule = Table.TransformColumns(
        MaintenanceSchedule,
        {{"Date", each if List.Contains(USHolidays, _) then
            if Date.DayOfWeek(_, Day.Sunday) = 5 then
                Date.AddDays(_, 3)     // Friday to Monday
            else
                Date.AddDays(_, 1)     // Other to next day
        else _, type date}}
    )
in
    AdjustedSchedule
```

Result: 
```powerquery
#table(type table[Task = text, Date = date],
{
    {"HVAC Check", #date(2025, 7, 10)},
    {"Window Washing", #date(2025, 9, 2)},
    {"Fire Drill", #date(2025, 9, 17)},
    {"Light Replacement", #date(2025, 11, 28)}
})
```




## Category
Table.Transformation
