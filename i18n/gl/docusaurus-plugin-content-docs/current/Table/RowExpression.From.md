---
title: RowExpression.From
---

# RowExpression.From


## Description

Devolve a árbore de sintaxe abstracta (AST) para o corpo dunha función.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Details

Devolve a árbore de sintaxe abstracta (AST) para o corpo de <code>function</code>, normalizada nunha <i>expresión de fila</i>:<ul>  <li>A función debe ser unha lambda de 1 argumento.</li>  <li>Todas as referencias ao parámetro de función substitúense por <code>RowExpression.Row</code>.</li>  <li>Todas as referencias ás columnas substitúense por <code>RowExpression.Column(<i>columnName</i>)</code>.</li>  <li>A AST simplificarase para conter só nodos deste tipo:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Prodúcese un erro se non se pode devolver unha expresión de fila AST para o corpo de <code>function</code>.<br />


## Examples

### Example #1 
Devolve o AST do corpo da función &lt;code&gt;each [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt;
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
