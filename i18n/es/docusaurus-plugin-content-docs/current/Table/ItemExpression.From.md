---
title: ItemExpression.From
---

# ItemExpression.From


## Description

Devuelve el árbol de sintaxis abstracta (AST) para el cuerpo de una función.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Details

Devuelve el árbol de sintaxis abstracta (AST) del cuerpo de <code>function</code>, normalizado en una <i>Devuelve el árbol de sintaxis abstracta expresión de elemento</i>:<ul>  <li>La función debe ser una expresión lambda de un argumento.</li>  <li>Todas las referencias al parámetro de la función se reemplazan por <code>ItemExpression.Item</code>.</li>  <li>El AST se simplificará para que contenga solo los nodos de los tipos:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Se genera un error si no se puede devolver el AST de una expresión de fila para el cuerpo de <code>function</code>.<br />


## Examples

### Example #1 
Devuelve el AST del cuerpo de la función &lt;code&gt;each _ &lt;&gt; null&lt;/code&gt;
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
