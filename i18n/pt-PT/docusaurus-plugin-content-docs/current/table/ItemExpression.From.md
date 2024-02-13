---
title: ItemExpression.From
---

# ItemExpression.From


Devolve a árvore de sintaxe abstrata (AST) para o corpo de uma função.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

Devolve a árvore de sintaxe abstrata (AST) para o corpo de <code>function</code>, normalizada numa <i>expressão de item</i>:<ul>  <li>A função tem de ser um lambda de um argumento.</li>  <li>Todas as referências ao parâmetro da função são substituídas por <code>ItemExpression.Item</code>.</li>  <li>A AST será simplificada para conter apenas nós dos tipos:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Será desencadeado um erro se não for possível que uma AST de expressão de item seja devolvida para o corpo de <code>function</code><br />


## Examples

### Example #1 
Devolve o AST para o corpo da função &lt;code&gt;each _ &lt;&gt; null&lt;/code&gt;
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
