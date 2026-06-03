---
title: Table.ReorderColumns
---

# Table.ReorderColumns


Retorna uma tabela com as colunas na ordem especificada.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Retorna uma tabela da entrada `table`, com as colunas na ordem especificada por `columnOrder`. As colunas que não forem especificadas na lista não serão reordenadas. Se a coluna não existir, um erro será gerado, a menos que o parâmetro opcional `missingField` especifique uma alternativa (por exemplo, `MissingField.UseNull` ou `MissingField.Ignore`).


## Examples

### Example #1
Alternar a ordem das colunas \[Phone\] e \[Name\] na tabela.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Phone = "123-4567", Name = "Bob"]}),
    {"Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2
Alternar a ordem das colunas \[Phone\] e \[Address\] ou usar "MissingField.Ignore" na tabela. Isso não altera a tabela porque a coluna \[Address\] não existe.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"Phone", "Address"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
