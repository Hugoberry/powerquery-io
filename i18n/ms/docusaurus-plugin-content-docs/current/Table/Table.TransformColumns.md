---
title: Table.TransformColumns
---

# Table.TransformColumns


## Description

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


## Details

Ubah <code>table</code> dengan menggunakan setiap operasi lajur yang disenaraikan dalam <code>transformOperations</code> (dengan format \{ column name, transformation } atau \{ column name, transformation, new column type }).    Jika <code>defaultTransformation</code> ditentukan, ia akan digunakan pada semua lajur yang tidak disenaraikan dalam <code>transformOperations</code>.    Jika lajur disenaraikan dalam <code>transformOperations</code> tidak wujud, pengecualian dikembalikan melainkan parameter pilihan <code>missingField</code> menentukan alternatif (contohnya, <code>MissingField.UseNull</code> atau <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Tukar nilai teks dalam lajur [A] kepada nilai nombor, dan nilai nombor dalam lajur [B] kepada nilai teks.
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
Tukar nilai nombor dalam lajur yang tidak ditemui [X] kepada nilai teks, mengabaikan lajur yang tidak wujud.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2],
    [A = "5", B = 10]
})
```


### Example #3 
Tukar nilai nombor dalam lajur yang tidak ditemui [X[ kepada nilai teks, lalaikan kepada nol pada lajur yang tidak wujud.
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


### Example #4 
Tokokan nilai nombor dalam lajur [B] dan tukarkannya kepada nilai teks, dan tukar semua lajur lain kepada nombor.
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




## Category
Table.Transformation
