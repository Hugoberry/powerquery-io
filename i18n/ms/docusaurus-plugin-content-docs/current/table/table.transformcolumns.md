---
title: Table.TransformColumns
---

# Table.TransformColumns


Mengubah nilai satu atau lebih lajur.


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

Menukar jadual yang ditentukan dengan melaksanakan setiap operasi lajur dalam senarai.

-   `table`: Jadual untuk ditukar.
-   `transformOperations`: Transformasi yang hendak dilakukan pada jadual. Format parameter ini adalah sama ada \{ column name, transformation \} atau \{ column name, transformation, new column type \}.
-   `defaultTransformation`: (Pilihan) Transformasi lalai yang digunakan pada semua lajur yang tidak disenaraikan dalam `transformOperations`.
-   `missingField`: (Pilihan) Menentukan tindakan yang dijangka untuk nilai yang hilang. Jika lajur yang disenaraikan dalam `transformOperations` tidak wujud, ralat akan dipaparkan (`MissingField.Error`) melainkan parameter ini menentukan alternatif. Gunakan salah satu nilai berikut:
    -   `MissingField.UseNull`: Sebarang medan yang hilang disertakan sebagai `nilai` null.
    -   `MissingField.Ignore`: Sebarang medan yang hilang diabaikan.


## Examples

### Example #1
Tukar nilai teks dalam lajur \[A\] kepada nilai nombor, dan nilai nombor dalam lajur \[B\] kepada nilai teks.
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
Tukar nilai nombor dalam lajur \[X\] yang tiada kepada nilai teks, lalaikan kepada lajur `nol` untuk lajur yang tidak wujud.
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
Tokokan nilai nombor dalam lajur \[B\] dan tukarkannya kepada nilai teks, dan tukar semua lajur lain kepada nombor.
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
Alihkan tugas penyelenggaraan berjadual yang berlaku pada cuti umum AS ke hari berikutnya atau, jika cuti tersebut jatuh pada hari Jumaat, ke hari Isnin berikutnya.
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
