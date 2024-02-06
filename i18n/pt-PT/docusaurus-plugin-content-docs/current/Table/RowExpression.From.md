---
title: RowExpression.From
---

# RowExpression.From


Devolve a árvore de sintaxe abstrata (AST) para o corpo de uma função.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

Devolve a árvore de sintaxe abstrata (AST) para o corpo de <code>function</code>, normalizada numa <i>expressão de linha</i>:<ul>  <li>A função tem de ser um lambda de um argumento.</li>  <li>Todas as referências ao parâmetro de função são substituídas por <code>RowExpression.Row</code>.</li>  <li>Todas as referências às colunas são substituídas por <code>RowExpression.Column(<i>columnName</i>)</code>.</li>  <li>A AST será simplificada para conter apenas nós dos tipos:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>NotImplemented</code></li>    </ul>  </li></ul><br /><br />Será desencadeado um erro se não for possível que uma AST de expressão de linha seja devolvida para o corpo de <code>function</code>.<br />


## Examples

### Example #1 
Devolve o AST para o corpo da função &lt;code&gt;each [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt;
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
