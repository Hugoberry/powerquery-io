---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


Mengembangkan lajur rekod menjadi lajur dengan setiap nilai.


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

Diberi `column` rekod dalam input `table`, mencipta jadual dengan lajur untuk setiap medan dalam rekod. Secara pilihan, `newColumnNames` mungkin ditentukan untuk memastikan nama unik untuk lajur dalam jadual baru.

-   `table`: Jadual asal dengan lajur rekod untuk dikembangkan.
-   `column`: Lajur untuk dikembangkan.
-   `fieldNames`: Senarai medan untuk dikembangkan menjadi lajur dalam jadual.
-   `newColumnNames`: Senarai nama lajur untuk diberi pada lajur baru. Nama lajur baru tidak boleh menjadi pendua sebarang lajur dalam jadual baru.


## Examples

### Example #1
Kembangkan lajur \[a\] dalam jadual `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` menjadi 3 lajur "aa", "bb" dan "cc".
```powerquery
Table.ExpandRecordColumn(
    Table.FromRecords({
        [
            a = [aa = 1, bb = 2, cc = 3],
            b = 2
        ]
    }),
    "a",
    {"aa", "bb", "cc"}
)
```

Result: 
```powerquery
Table.FromRecords({[aa = 1, bb = 2, cc = 3, b = 2]})
```




## Category
Table.Transformation
