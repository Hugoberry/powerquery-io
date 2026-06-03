---
title: Table.View
---

# Table.View


Cria ou expande uma tabela com processadores definidos pelo utilizador para operações de consulta e ação.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

Devolve uma vista de `table` em que as funções especificadas em `handlers` são utilizadas em detrimento do comportamento pré-definido de uma operação quando esta é aplicada à vista.

Se `table` for fornecido, todas as funções de processador são opcionais. Se `table` não for fornecido, serão necessárias as funções de processador `GetType` e `GetRows`. Se uma função de processador não for especificada numa operação, o comportamento predefinido da operação será antes aplicado a `table` (exceto no caso de `GetExpression`).

As funções de processador devem devolver um valor semanticamente equivalente ao resultado da aplicação da operação em relação a `table` (ou a vista resultante, no caso de `GetExpression`).

Se uma função de processador gerar um erro, o comportamento pré-definido da operação é aplicado à vista.

`Table.View` pode ser utilizado para implementar a dobragem a uma origem de dados – a tradução de consultas M para consultas específicas da origem (por exemplo, para criar declarações T-SQL a partir de consultas M).

Consulte a documentação publicada sobre o conector personalizado do Power Query para obter uma descrição mais completa de `Table.View`.


## Examples

### Example #1
Crie uma vista básica que não requeira o acesso às linhas para determinar o tipo ou a contagem de linhas.
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
