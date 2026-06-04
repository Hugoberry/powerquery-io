---
title: ItemExpression.From
---

# ItemExpression.From


Mengembalikan pepohon sintaks abstrak (AST) untuk isi fungsi.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

Mengembalikan pokok sintaks abstrak (AST) untuk isi `function`, dinormalkan kepada *ungkapan item*:

-   Fungsi mestilah lambda 1 argumen.
-   Semua rujukan kepada parameter fungsi digantikan dengan `ItemExpression.Item`.
-   AST akan diringkaskan supaya mengandungi nod jenis berikut sahaja:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Ralat dibangkitkan jika ungkapan item AST tidak boleh dikembalikan untuk isi `function`.  
  
Fungsi ini sama dengan `RowExpression.From`.


## Examples

### Example #1
Mengembalikan AST untuk isi fungsi `each _ <> null`.
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
