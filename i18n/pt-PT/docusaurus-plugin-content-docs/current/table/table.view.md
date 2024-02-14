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

Devolve uma vista de <code>table</code> em que as funções especificadas em <code>handlers</code> são utilizadas em detrimento do comportamento pré-definido de uma operação quando esta é aplicada à vista.<br />Se <code>table</code> for fornecido, todas as funções de processador são opcionais. Se <code>table</code> não for fornecido, serão necessárias as funções de processador <code>GetType</code> e <code>GetRows</code>. Se uma função de processador não for especificada numa operação, o comportamento predefinido da operação será antes aplicado a <code>table</code> (exceto no caso de <code>GetExpression</code>).<br />As funções de processador devem devolver um valor semanticamente equivalente ao resultado da aplicação da operação em relação a <code>table</code> (ou a vista resultante, no caso de <code>GetExpression</code>).<br />Se uma função de processador gerar um erro, o comportamento pré-definido da operação é aplicado à vista.<br /><code>Table.View</code> pode ser utilizado para implementar a dobragem a uma origem de dados – a tradução de consultas M para consultas específicas da origem (por exemplo, para criar declarações T-SQL a partir de consultas M).<br />Consulte a documentação publicada sobre o conector personalizado do Power Query para obter uma descrição mais completa de <code>Table.View</code>.<br />


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
