---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


Retorna uma lista com os nomes das colunas que correspondem aos tipos especificados.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Remarks

Retorna uma lista com os nomes das colunas na tabela `table` que correspondem aos tipos especificados no `listOfTypes`.


## Examples

### Example #1
Retornar os nomes de colunas do tipo Number.Type da tabela.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[a = 1, b = "hello"]},
        type table[a = Number.Type, b = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"a"}
```




## Category
Table.Column operations
