---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


Bir kayıt sütununu her değeri içeren sütunlar olarak genişletir.


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

`table` girdisinde kayıtlara ait verilen `column` ile kayıttaki her alan için bir sütun içeren bir tablo oluşturur. İsteğe bağlı olarak, yeni tabloda sütunlara ait benzersiz adların olduğundan emin olmak için `newColumnNames` belirtilebilir.

-   `table`: Genişletilecek kayıt sütununu içeren asıl tablo.
-   `column`: Genişletilecek sütun.
-   `fieldNames`: Tabloda sütunlar halinde genişletilecek alan listesi.
-   `newColumnNames`: Yeni sütunlara verilecek sütun adları listesi. Yeni sütun adları yeni tablodaki hiçbir sütunu çoğaltamaz.


## Examples

### Example #1
`({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` tablosundaki \[a\] sütununu "aa", "bb" ve "cc" sütunlarına genişletir.
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
