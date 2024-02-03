---
title: ItemExpression.From
---

# ItemExpression.From


## Description

Retorna l&#39;arbre de sintaxi abstracta (AST) per al cos d&#39;una funció.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Details

Retorna l'arbre de sintaxi abstracta (AST) del cos de l’element <code>function</code>, normalitzat en una  <i>expressió d’element</i>:<ul>  <li>La funció ha de ser una lambda d'un argument.</li>  <li>Totes les referències al paràmetre de la funció se substitueixen per  <code>ItemExpression.Item</code>.</li>  <li>L'AST se simplificarà perquè contingui només nodes dels tipus:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Es genera un error si no es pot retornar l'AST d'una expressió de fila per al cos de l’element <code>function</code>.<br />


## Examples

### Example #1 
Retorna l&#39;AST del cos de la funció &lt;code&gt;each _ &lt;&gt; null&lt;/code&gt;.
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
