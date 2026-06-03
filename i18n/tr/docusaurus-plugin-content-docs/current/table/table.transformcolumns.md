---
title: Table.TransformColumns
---

# Table.TransformColumns


Bir veya daha fazla sütunun değerlerini dönüştürür.


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

Belirtilen tabloyu, listedeki her sütun işlemini uygulayarak dönüştürür.

-   `table`: Dönüştürülecek tablo.
-   `transformOperations`: Tabloda yapılacak dönüşümler. Bu parametrenin biçimi \{ column name, transformation \} veya \{ column name, transformation, new column type \} olabilir.
-   `defaultTransformation`: (İsteğe bağlı) `transformOperations` içinde listelenmeyen tüm sütunlara uygulanan varsayılan dönüşüm.
-   `missingField`: (İsteğe bağlı) Eksik değerler için beklenen eylemi belirtir. `transformOperations` içinde listelenen bir sütun mevcut değilse, bu parametre bir alternatif belirtmedikçe bir hata oluşur (`MissingField.Error`). Aşağıdaki değerlerden birini kullanın:
    -   `MissingField.UseNull`: Eksik alanlar `null` değerleri olarak eklenir.
    -   `MissingField.Ignore`: Eksik alanlar yok sayılır.


## Examples

### Example #1
\[A\] sütunundaki metin değerlerini sayı değerlerine, \[B\] sütunundaki sayı değerlerini de metin değerlerine dönüştürün.
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
\[X\] adlı eksik sütundaki sayı değerlerini metin değerlerine dönüştür; mevcut olmayan sütunlar için varsayılan olarak `null` değeri kullanılır.
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
\[B\] sütundaki sayı değerlerini artırın ve bunları metin değerlerine dönüştürün, diğer tüm sütunları da sayıya dönüştürün.
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
ABD'de tatil günlerinde gerçekleştirilen zamanlanmış bakım görevlerini bir sonraki güne veya tatil günü Cuma ise bir sonraki Pazartesi gününe erteleyin.
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
