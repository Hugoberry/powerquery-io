---
title: Table.TransformColumns
---

# Table.TransformColumns


Mengubah nilai dari satu atau beberapa kolom.


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

Ubah tabel yang ditentukan dengan menerapkan setiap operasi kolom dalam daftar.

-   `table`: Tabel yang akan diubah.
-   `transformOperations`: Perubahan yang akan dibuat pada tabel. Format parameter ini adalah \{ column name, transformation \} atau \{ column name, transformation, new column type \}.
-   `defaultTransformation`: (Opsional) Transformasi default yang diterapkan ke semua kolom yang tidak tercantum dalam `transformOperations`.
-   `missingField`: (Opsional) Menentukan tindakan yang diharapkan untuk nilai yang tidak ada. Jika kolom yang tercantum di `transformOperations` tidak ada, kesalahan akan muncul (`MissingField.Error`) kecuali parameter ini menentukan alternatif. Gunakan salah satu nilai berikut:
    -   `MissingField.UseNull`: Setiap bidang yang tidak ada disertakan sebagai nilai `null`.
    -   `MissingField.Ignore`: Bidang yang tidak ada diabaikan.


## Examples

### Example #1
Mengonversikan nilai teks dalam kolom \[A\] menjadi nilai angka, dan nilai angka dalam kolom \[B\] menjadi nilai teks.
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
Konversikan nilai angka dalam kolom yang hilang \[X\] menjadi nilai teks, dengan default `null` untuk kolom yang tidak ada.
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
Menambah nilai angka di kolom \[B\] dan mengonversinya menjadi nilai teks, dan mengonversi semua kolom lain menjadi angka.
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
Pindahkan tugas pemeliharaan terjadwal yang jatuh pada hari libur AS ke hari berikutnya atau, jika hari libur jatuh pada hari Jumat, ke hari Senin berikutnya.
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
