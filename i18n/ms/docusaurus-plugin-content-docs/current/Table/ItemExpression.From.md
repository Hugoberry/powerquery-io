---
title: ItemExpression.From
---

# ItemExpression.From


## Description

Mengembalikan pepohon sintaks abstrak (AST) untuk isi fungsi.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Details

Mengembalikan pepohon sintaks abstrak (AST) untuk isi <code>function</code>, dinormalkan kepada <i>ungkapan item</i>:<ul>  <li>Fungsi mestilah 1 argumen lambda.</li>  <li>Semua rujukan kepada parameter fungsi digantikan dengan <code>ItemExpression.Item</code>.</li>  <li>AST akan diringkaskan agar mengandungi hanya nod daripada jenis berikut:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>      </ul>  </li></ul><br /><br />Ralat akan ditunjukkan jika AST ungkapan item tidak boleh dikembalikan untuk isi <code>function</code>.<br />


## Examples

### Example #1 
Mengembalikan AST untuk isi fungsi &lt;code&gt;each _ &lt;&gt; null&lt;/code&gt;
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
