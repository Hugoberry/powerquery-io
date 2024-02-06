---
title: Table.ToList
---

# Table.ToList


Converte uma tabela numa lista tabela aplicando a função de combinação especificada a cada linha de valores existente na tabela.


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Remarks

Converte uma tabela numa lista tabela aplicando a função de combinação especificada a cada linha de valores existente na tabela.


## Examples

### Example #1 
Combinar o texto de cada linha com uma vírgula.
```powerquery
Table.ToList(
    Table.FromRows({
        {Number.ToText(1), "Bob", "123-4567"},
        {Number.ToText(2), "Jim", "987-6543"},
        {Number.ToText(3), "Paul", "543-7890"}
    }),
    Combiner.CombineTextByDelimiter(",")
)
```

Result: 
```powerquery
{"1,Bob,123-4567", "2,Jim,987-6543", "3,Paul,543-7890"}
```




## Category
Table.Conversions
