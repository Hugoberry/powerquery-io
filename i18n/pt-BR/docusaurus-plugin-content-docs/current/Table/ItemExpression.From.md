---
title: ItemExpression.From
---

# ItemExpression.From


Retorna a árvore de sintaxe abstrata (AST) para o corpo de uma função.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

Retorna a árvore de sintaxe abstrata (AST) para o corpo de <code>function</code>, normalizada em uma <i>expressão de item</i>:<ul>   <li>A função deve ser um lambda de 1 argumento.</li>   <li>Todas as referências ao parâmetro de função são substituídas por <code>ItemExpression.Item</code>.</li>   <li>O AST será simplificado para conter apenas nós dos tipos:     <ul>       <li><code>Constante</code></li>       <li><code>Invocação</code></li>       <li><code>Unário</code></li>       <li><code>Binário</code></li>       <li><code>Se</code></li>       <li><code>FieldAccess</code></li>     </ul>   </li></ul><br /><br />Um erro é levantado se uma expressão de item AST não puder ser retornada para o corpo de <code>function</code>.<br />


## Examples

### Example #1 
Retorna o AST para o corpo da função &lt;code&gt;each _ &lt;&gt; null&lt;/code&gt;
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
