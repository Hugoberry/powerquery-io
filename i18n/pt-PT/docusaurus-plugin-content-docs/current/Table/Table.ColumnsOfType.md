---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


Devolve uma lista com os nomes das colunas correspondentes aos tipos especificados.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Remarks

Devolve uma lista com os nomes das colunas da tabela <code>table</code> que correspondem aos tipos especificados em <code>listOfTypes</code>.


## Examples

### Example #1 
Devolver os nomes das colunas do tipo Number.Type a partir da tabela.
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
