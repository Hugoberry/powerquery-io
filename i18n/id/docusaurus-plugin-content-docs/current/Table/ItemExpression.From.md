---
title: ItemExpression.From
---

# ItemExpression.From


## Description

Menghasilkan pohon sintaksis abstrak (AST) untuk badan fungsi.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Details

Menghasilkan pohon sintaks abstrak (AST) untuk isi <code>function</code>, yang dinormalisasi menjadi <i>ekspresi item</i>:<ul>  <li>Fungsi harus berupa lambda 1 argumen.</li>  <li>Semua referensi ke parameter fungsi diganti dengan <code>ItemExpression.Item</code>.</li>  <li>AST akan disederhanakan agar hanya berisi node jenis:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Kesalahan akan dimunculkan jika AST ekspresi item tidak dapat dihasilkan untuk isi <code>function</code>.<br />


## Examples

### Example #1 
Menghasilkan AST untuk isi fungsi &lt;code&gt;each _ &lt;&gt; null&lt;/code&gt;
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
