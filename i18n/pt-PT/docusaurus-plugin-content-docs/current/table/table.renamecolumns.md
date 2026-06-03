---
title: Table.RenameColumns
---

# Table.RenameColumns


Aplica mudanças de nome com o formato \{old, new\}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Efetua as mudanças de nome especificadas nas colunas da tabela `table`. Uma operação de substituição `renames` é composta por uma lista de dois valores, o nome antigo da coluna e o nome novo da coluna, fornecidos numa lista. Se a coluna não existir, é gerado um erro a menos que o parâmetro opcional `missingField` especifique uma alternativa (por ex.: `MissingField.UseNull` ou `MissingField.Ignore`).


## Examples

### Example #1
Substituir o nome de coluna "CustomerNum" com "CustomerID" na tabela.
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
Substituir os nomes de coluna "CustomerNum" por "CustomerID" e "PhoneNum" por "Phone" na tabela.
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
