---
title: RowExpression.From
---

# RowExpression.From


## Description

Menghasilkan pohon sintaksis abstrak (AST) untuk badan fungsi.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Details

Menghasilkan pohon sintaks abstrak (AST) untuk isi <code>function</code>, yang dinormalisasi menjadi <i>ekspresi baris</i>:<ul>  <li>Fungsi harus berupa lambda 1 argumen.</li>  <li>Semua referensi ke parameter fungsi diganti dengan <code>RowExpression.Row</code>.</li>  <li>Semua referensi ke kolom diganti dengan <code>RowExpression.Column(<i>columnName</i>)</code>.</li>  <li>AST akan disederhanakan agar hanya berisi node jenis:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Kesalahan akan dimunculkan jika AST ekspresi baris tidak dapat dihasilkan untuk isi <code>function</code>.<br />


## Examples

### Example #1 
Menghasilkan AST untuk badan fungsi &lt;code&gt;each [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt;
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
