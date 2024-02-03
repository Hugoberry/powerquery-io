---
title: ItemExpression.From
---

# ItemExpression.From


## Description

Devolve a árbore de sintaxe abstracta (AST) para o corpo dunha función.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Details

Devolve a árbore de sintaxe abstracta (AST) para o corpo de <code>function</code>, normalizada nunha <i>expresión de elemento</i>:<ul>  <li>A función debe ser unha lambda de 1 argumento.</li>  <li>Todas as referencias ao parámetro da función substitúense por <code>ItemExpression.Item</code>.</li>  <li>A AST simplificarase para conter só nodos do tipo:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Prodúcese un erro se non se pode devolver unha expresión de elemento AST para o corpo de <code>function</code>.<br />


## Examples

### Example #1 
Devolve o AST do corpo da función &lt;code&gt;each _ &lt;&gt; null&lt;/code&gt;
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
