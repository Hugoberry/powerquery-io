---
title: Table.View
---

# Table.View


Cria ou estende uma tabela com manipuladores definidos pelo usuário para operações de consulta e ação.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

Retorna uma exibição de `table` em que as funções especificadas em `handlers` são usadas no lugar do comportamento padrão de uma operação quando esta é aplicada à exibição.

Se `table` for fornecido, todas as funções de manipulador serão opcionais. Se `table` não for fornecido, as funções de manipulador `GetType` e `GetRows` serão necessárias. Se uma função de manipulador não for especificada para uma operação, o comportamento padrão da operação será aplicado a `table` (exceto no caso de `GetExpression`).

As funções de manipulador precisam retornar um valor que seja semanticamente equivalente ao resultado de se aplicar a operação contra `table` (ou a exibição resultante no caso de `GetExpression`).

Se uma função de manipulador gera um erro, o comportamento padrão da operação é aplicado à exibição.

`Table.View` pode ser usado para implementar dobras a uma fonte de dados - a tradução de consultas M em consultas de origem específica (por exemplo, para criar instruções T-SQL de consultas M).

Confira a documentação publicada do conector personalizado do Power Query para obter uma descrição mais completa de `Table.View`.


## Examples

### Example #1
Crie uma exibição básica que não exija o acesso às linhas para determinar o tipo ou a contagem de linhas.
```powerquery
Table.View(
    null,
    [
        GetType = () => type table [CustomerID = number, Name = text, Phone = nullable text],
        GetRows = () => Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
        GetRowCount = () => 1
    ]
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Table construction
