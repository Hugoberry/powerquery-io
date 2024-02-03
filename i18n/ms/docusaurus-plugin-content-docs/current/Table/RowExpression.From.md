---
title: RowExpression.From
---

# RowExpression.From


## Description

Mengembalikan pepohon sintaks abstrak (AST) untuk isi fungsi.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Details

Mengembalikan pepohon sintaks abstrak (AST) untuk isi <code>function</code>, dinormalkan kepada <i>ungkapan baris</i>:<ul>  <li>Fungsi mestilah 1 argumen lambda.</li>  <li>Semua rujukan kepada parameter fungsi digantikan dengan <code>RowExpression.Row</code>.</li>  <li>Semua rujukan kepada lajur digantikan dengan <code>RowExpression.Column(<i>columnName</i>)</code>.</li>  <li>AST akan diringkaskan supaya mengandungi hanya nod jenis berikut:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Ralat akan ditunjukkan jika AST ungkapan baris tidak boleh dikembalikan untuk isi <code>function</code>.<br />


## Examples

### Example #1 
Mengembalikan AST untuk isi fungsi &lt;code&gt;setiap [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt;
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
