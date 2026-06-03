---
title: Table.Distinct
---

# Table.Distinct


Remove linhas duplicadas da tabela.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Remarks

Remove linhas duplicadas da tabela. Um parâmetro opcional, `equationCriteria`, especifica quais colunas da tabela são testadas quanto à duplicação. Se `equationCriteria` não for especificado, todas as colunas serão testadas.  
  
Como o Power Query, às vezes, transfere certas operações para fontes de dados no backend (o que é conhecido como “dobragem”) e, em outras ocasiões, otimiza as consultas por ignorando operações que não são estritamente necessárias, em geral não há garantia de qual duplicata específica será preservada. Por exemplo, você não pode presumir que a primeira linha com um conjunto exclusivo de valores de coluna permanecerá e as linhas mais abaixo na tabela serão removidas. Se desejar que a remoção de duplicatas se comporte de forma previsível, primeiro faça o buffer da tabela usando `Table.Buffer`.


## Examples

### Example #1
Remover as linhas duplicadas da tabela.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "b"],
        [a = "A", b = "a"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "B", b = "b"]
})
```


### Example #2
Remova as linhas duplicadas da coluna \[b\] na tabela `({[a = "A", b = "a"], [a = "B", b = "a"], [a = "A", b = "b"]})`.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "a"],
        [a = "A", b = "b"]
    }),
    "b"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "A", b = "b"]
})
```




## Category
Table.Membership
