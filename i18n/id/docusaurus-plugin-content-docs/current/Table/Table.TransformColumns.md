---
title: Table.TransformColumns
---

# Table.TransformColumns


## Description

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


## Details

Mengubah <code>table</code> dengan menerapkan setiap operasi kolom yang tercantum dalam <code>transformOperations</code> (dengan format \{ column name, transformation } atau \{ column name, transformation, new column type }).    Jika <code>defaultTransformation</code> ditentukan, itu akan diterapkan ke semua kolom yang tidak tercantum di <code>transformOperations</code>.    Jika kolom yang tercantum di <code>transformOperations</code> tidak ada, pengecualian dibuang kecuali parameter opsional <code>missingField</code> menentukan alternatif (misalnya, <code>MissingField.UseNull</code> atau <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Mengonversikan nilai teks dalam kolom [A] menjadi nilai angka, dan nilai angka dalam kolom [B] menjadi nilai teks.
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
Mengonversikan nilai angka ke kolom [X] yang hilang ke nilai teks, mengabaikan kolom yang tidak ada.
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
Mengonversikan nilai angka ke kolom [X] yang hilang ke nilai teks, mengubah default menjadi null dalam kolom yang tidak ada.
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
Menambah nilai angka di kolom [B] dan mengonversinya menjadi nilai teks, dan mengonversi semua kolom lain menjadi angka.
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
