---
title: Table.RemoveColumns
---

# Table.RemoveColumns


## Description

Remove as colunas especificadas.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Remove a <code>columns</code> especificada do <code>table</code> fornecido.    Se a coluna especificada não existir, é gerado um erro a menos que o parâmetro opcional <code>missingField</code> especifique um comportamento alternativo (por ex.: <code>MissingField.UseNull</code> ou <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Remover a coluna [Telefone] da tabela.
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Phone"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #2 
Tente remover uma coluna inexistente da tabela.
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Address"
)
```

Result: 
```powerquery
[Expression.Error] The column 'Address' of the table wasn't found.
```




## Category
Table.Column operations
