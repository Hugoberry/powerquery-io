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

Devolve a árvore de sintaxe abstrata (AST) para o corpo de `function`, normalizada numa *expressão de linha*:

-   A função tem de ser uma lambda de um argumento.
-   Todas as referências ao parâmetro da função são substituídas por `RowExpression.Row`.
-   Todas as referências a colunas são substituídas por `RowExpression.Column(columnName)`.
-   A AST será simplificada para conter apenas nós dos tipos seguintes:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

É gerado um erro se não for possível devolver uma AST de expressão de linha para o corpo de `function`.  
  
Esta função é idêntica a `ItemExpression.From`.


## Examples

### Example #1
Devolve a AST para o corpo da função `each [CustomerID] = "ALFKI"`.
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
