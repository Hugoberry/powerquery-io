---
title: RowExpression.From
---

# RowExpression.From


## Description

Retorna a árvore de sintaxe abstrata (AST) para o corpo de uma função.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Details

Retorna a árvore de sintaxe abstrata (AST) para o corpo de <code>function</code>, normalizada em uma <i>expressão de linha</i>:<ul>   <li>A função deve ser um lambda de 1 argumento.</li>  <li>Todas as referências ao parâmetro de função são substituídas por <code>RowExpression.Row</code>.</li>   <li>Todas as referências a colunas são substituídas por <code>RowExpression.Column(<i>columnName</i>)</code>.</li>   <li>O AST será simplificado para conter apenas nós dos tipos:     <ul>       <li><code>Constante</code></li>       <li><code>Invocação</code></li>       <li><code>Unário</code></li>       <li><code>Binário</code></li>       <li><code>Se</code></li>       <li><code>FieldAccess</code></li>     </ul>   </li></ul><br /><br />Um erro será gerado se uma expressão de linha AST não puder ser retornada para o corpo de <code>function</code>.<br />


## Examples

### Example #1 
Retorna o AST para o corpo da função &lt;code&gt;each [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt;
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
