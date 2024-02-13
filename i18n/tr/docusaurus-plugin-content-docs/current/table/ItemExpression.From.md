---
title: ItemExpression.From
---

# ItemExpression.From


İşlevin gövdesi için soyut söz dizimi ağacını (AST) döndürür.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

<code>function</code> gövdesine ilişkin <i>öğe ifadesinde</i> normalleştirilmiş soyut söz dizimi ağacını (AST) döndürür:<ul>  <li>İşlevin 1 bağımsız değişkenli lambda olması gerekir.</li>  <li>İşlev parametresine yönelik tüm başvurular <code>ItemExpression.Item</code> ile değiştirilir.</li>  <li>AST yalnızca şu tür düğümleri içerecek şekilde basitleştirilir:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br /><code>function</code> gövdesi için öğe ifadesi AST'sinin döndürülemediği durumlarda hata oluşur.<br />


## Examples

### Example #1 
&lt;code&gt;each _ &lt;&gt; null&lt;/code&gt; işlevinin gövdesi için AST&#39;yi döndürür
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
