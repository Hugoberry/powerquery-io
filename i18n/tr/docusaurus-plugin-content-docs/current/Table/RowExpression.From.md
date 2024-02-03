---
title: RowExpression.From
---

# RowExpression.From


## Description

İşlevin gövdesi için soyut söz dizimi ağacını (AST) döndürür.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Details

<code>function</code> gövdesine ilişkin <i>satır ifadesinde</i> normalleştirilmiş soyut söz dizimi ağacını (AST) döndürür:<ul>  <li>İşlevin 1 bağımsız değişkenli lambda olması gerekir.</li>  <li>İşlev parametresine yönelik tüm başvurular <code>RowExpression.Row</code> ile değiştirilir.</li>  <li>Sütunlara yönelik tüm başvurular <code>RowExpression.Column(<i>columnName</i>)</code> ile değiştirilir.</li>  <li>AST, yalnızca şu tip düğümleri içerecek şekilde basitleştirilir:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br /><code>function</code> gövdesi için satır ifadesi AST'sinin döndürülemediği durumlarda hata oluşur.<br />


## Examples

### Example #1 
&lt;code&gt;each [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt; işlev gövdesine ilişkin AST&#39;yi döndürür
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
