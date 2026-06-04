---
title: RowExpression.From
---

# RowExpression.From


Mengembalikan pepohon sintaks abstrak (AST) untuk isi fungsi.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

Mengembalikan pokok sintaks abstrak (AST) untuk isi `function`, dinormalkan kepada *ungkapan baris*:

-   Fungsi mestilah lambda 1 argumen.
-   Semua rujukan kepada parameter fungsi digantikan dengan `RowExpression.Row`.
-   Semua rujukan kepada lajur digantikan dengan `RowExpression.Column(columnName)`.
-   AST akan diringkaskan supaya mengandungi nod jenis berikut sahaja:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Ralat akan ditunjukkan jika AST ungkapan baris tidak dapat dikembalikan untuk isi `function`.  
  
Fungsi ini sama dengan `ItemExpression.From`.


## Examples

### Example #1
Mengembalikan AST untuk isi fungsi `setiap [CustomerID] = "ALFKI"`.
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
