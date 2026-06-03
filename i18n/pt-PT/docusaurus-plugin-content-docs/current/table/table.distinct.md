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

Remove linhas duplicadas da tabela. Um parâmetro opcional, `equationCriteria`, especifica quais as colunas da tabela que são testadas para duplicação. Se `equationCriteria` não for especificado, todas as colunas serão testadas.  
  
Uma vez que, por vezes, o Power Query transfere determinadas operações para origens de dados de back-end (num processo conhecido como "dobragem de consultas") e, por vezes, também otimiza consultas ao ignorar operações que não são estritamente necessárias, em geral não há qualquer garantia de qual o duplicado específico que será preservado. Por exemplo, não pode presumir que a primeira linha com um conjunto exclusivo de valores de coluna permanecerá e que as linhas mais abaixo na tabela serão removidas. Se pretender que a remoção de duplicados tenha um comportamento previsível, coloque primeiro a tabela em memória intermédia com `Table.Buffer`.


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
Remover as linhas duplicadas da coluna \[b\] na tabela `({[a = "A", b = "a"], [a = "B", b = "a"], [a = "A", b = "b"]})`.
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
