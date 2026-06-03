---
title: Table.ReorderColumns
---

# Table.ReorderColumns


Devolve uma tabela com as colunas pela ordem especificada.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Devolve uma tabela a partir da entrada `table`, com as colunas pela ordem especificada por `columnOrder`. As colunas que não forem especificadas na lista não serão reordenadas. Se a coluna não existir, é gerado um erro a menos que o parâmetro opcional `missingField` especifique uma alternativa (por ex.: `MissingField.UseNull` ou `MissingField.Ignore`).


## Examples

### Example #1
Alternar a ordem das colunas \[Telefone\] e \[Nome\] na tabela.
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
Alternar a ordem das colunas \[Telefone\] e \[Endereço\] ou utilizar "MissingField.Ignore" na tabela. Não altera a tabela por a coluna \[Endereço\] não existir.
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
