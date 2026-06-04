---
title: ItemExpression.From
---

# ItemExpression.From


Menghasilkan pohon sintaksis abstrak (AST) untuk badan fungsi.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

Mengembalikan pohon sintaks abstrak (AST) untuk isi `function`, dinormalkan menjadi ekspresi item :

-   Fungsi harus berbentuk lambda 1 argumen.
-   Semua referensi ke parameter fungsi diganti dengan `ItemExpression.Item`.
-   AST akan disederhanakan agar hanya berisi node jenis:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Kesalahan dimunculkan jika AST ekspresi item tidak dapat dikembalikan untuk isi `function`.  
  
Fungsi ini identik dengan `RowExpression.From`.


## Examples

### Example #1
Menghasilkan AST untuk isi fungsi `each _ <> null`.
```powerquery
ItemExpression.From(each _ <> null)
```

Result: 
```powerquery
[
    Kind = "Binary",
    Operator = "NotEquals",
    Left = ItemExpression.Item,
    Right =
    [
        Kind = "Constant",
        Value = null
    ]
]
```




## Category
Table.Table construction
