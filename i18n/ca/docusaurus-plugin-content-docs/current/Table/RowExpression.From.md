---
title: RowExpression.From
---

# RowExpression.From


## Description

Retorna l&#39;arbre de sintaxi abstracta (AST) per al cos d&#39;una funció.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Details

Retorna l'arbre de sintaxi abstracta (AST) del cos de l’element <code>function</code>, normalitzat en una  <i>expressió de fila</i>:<ul>  <li>La funció ha de ser una lambda d'un argument.</li>  <li>Totes les referències a les columnes se substitueixen per <code>RowExpression.Row</code>.</li>  <li>Totes les referències a les columnes se substitueixen per <code>RowExpression.Column(<i>columnName</i>)</code>.</li>  <li>L'AST se simplificarà perquè contingui només nodes dels tipus:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Es genera un error si no es pot retornar l'AST d'una expressió de fila per al cos de l’element <code>function</code>.<br />


## Examples

### Example #1 
Retorna l&#39;AST del cos de la funció &lt;code&gt;each [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt;
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
