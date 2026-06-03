---
title: Table.RenameColumns
---

# Table.RenameColumns


Aplica renomeações do formulário \{old, new\}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Renomeia as colunas na tabela `table`. Uma operação de substituição `renames` consiste em uma lista de dois valores, o nome da coluna antiga e o nome da nova coluna, fornecidos em uma lista. Se a coluna não existir, um erro será gerado, a menos que o parâmetro opcional `missingField` especifique uma alternativa (por exemplo, `MissingField.UseNull` ou `MissingField.Ignore`).


## Examples

### Example #1
Substituir o nome de coluna "CustomerNum" por "CustomerID" na tabela.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerNum", "CustomerID"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2
Substituir o nome de coluna "CustomerNum" por "CustomerID" e "PhoneNum" por "Phone" na tabela.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", PhoneNum = "123-4567"]}),
    {
        {"CustomerNum", "CustomerID"},
        {"PhoneNum", "Phone"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #3
Substituir o nome de coluna "NewCol" por "NewColumn" na tabela e ignorar se a coluna não existir.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"NewCol", "NewColumn"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
