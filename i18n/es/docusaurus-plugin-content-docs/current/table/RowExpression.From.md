---
title: RowExpression.From
---

# RowExpression.From


Devuelve el árbol de sintaxis abstracta (AST) para el cuerpo de una función.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

Devuelve el árbol de sintaxis abstracta (AST) del cuerpo de <code>function</code>, normalizado en una <i>expresión de fila</i>:<ul>  <li>La función debe ser una expresión lambda de un argumento.</li>  <li>Todas las referencias al parámetro de la función se reemplazan por <code>RowExpression.Row</code>.</li>  <li>Todas las referencias a las columnas se reemplazan por <code>RowExpression.Column(<i>columnName</i>)</code>.</li>  <li>El AST se simplificará para que contenga solo los nodos de los tipos:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Se genera un error si no se puede devolver el AST de una expresión de fila para el cuerpo de <code>function</code>.<br />


## Examples

### Example #1 
Devuelve el AST para el cuerpo de la función &lt;code&gt;each [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt;
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
