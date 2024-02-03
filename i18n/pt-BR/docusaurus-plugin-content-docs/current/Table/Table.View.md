---
title: Table.View
---

# Table.View


## Description

Cria ou estende uma tabela com manipuladores definidos pelo usuário para operações de consulta e ação.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Details

Retorna uma exibição de <code>table</code> em que as funções especificadas em <code>handlers</code> são usadas no lugar do comportamento padrão de uma operação quando esta é aplicada à exibição.<br />Se <code>table</code> for fornecido, todas as funções de manipulador serão opcionais. Se <code>table</code> não for fornecido, as funções de manipulador <code>GetType</code> e <code>GetRows</code> serão necessárias. Se uma função de manipulador não for especificada para uma operação, o comportamento padrão da operação será aplicado a <code>table</code> (exceto no caso de <code>GetExpression</code>).<br />As funções de manipulador precisam retornar um valor que seja semanticamente equivalente ao resultado de se aplicar a operação contra <code>table</code> (ou a exibição resultante no caso de <code>GetExpression</code>).<br />Se uma função de manipulador gera um erro, o comportamento padrão da operação é aplicado à exibição.<br /><code>Table.View</code> pode ser usado para implementar dobras a uma fonte de dados - a tradução de consultas M em consultas de origem específica (por exemplo, para criar instruções T-SQL de consultas M).<br />Confira a documentação publicada do conector personalizado do Power Query para obter uma descrição mais completa de <code>Table.View</code>.<br />


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
