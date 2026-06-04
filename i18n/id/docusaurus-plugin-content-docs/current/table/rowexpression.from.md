---
title: RowExpression.From
---

# RowExpression.From


Menghasilkan pohon sintaksis abstrak (AST) untuk badan fungsi.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

Mengembalikan pohon sintaks abstrak (AST) untuk isi `function`, dinormalkan menjadi *ekspresi baris*:

-   Fungsi harus berbentuk lambda 1 argumen.
-   Semua referensi ke parameter fungsi digantikan dengan `RowExpression.Row`.
-   Semua referensi ke kolom digantikan dengan `RowExpression.Column(columnName)`.
-   AST akan disederhanakan agar hanya berisi node jenis:
    -   `Konstanta`
    -   `Invokasi`
    -   `Uner`
    -   `Biner`
    -   `Jika`
    -   `FieldAccess`

Terjadi kesalahan jika AST ekspresi baris tidak dapat dihasilkan untuk isi `function`.  
  
Fungsi ini identik dengan `ItemExpression.From`.


## Examples

### Example #1
Menghasilkan AST untuk badan fungsi `each [CustomerID] = "ALFKI"`.
```powerquery
RowExpression.From(each [CustomerName] = "ALFKI")
```

Result: 
```powerquery
[
    Kind = "Binary",
    Operator = "Equals",
    Left = RowExpression.Column("CustomerName"),
    Right =
    [
        Kind = "Constant",
        Value = "ALFKI"
    ]
]
```




## Category
Table.Table construction
