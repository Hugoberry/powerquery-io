---
title: Table.RenameColumns
---

# Table.RenameColumns


Aplica mudanças de nome com o formato \{old, new}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Efetua as mudanças de nome especificadas nas colunas da tabela <code>table</code>. Uma operação de substituição <code>renames</code> é composta por uma lista de dois valores, o nome antigo da coluna e o nome novo da coluna, fornecidos numa lista.    Se a coluna não existir, é emitida uma exceção a menos que o parâmetro opcional <code>missingField</code> especifique uma alternativa (por ex.: <code>MissingField.UseNull</code> ou <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Substituir o nome de coluna &#34;CustomerNum&#34; com &#34;CustomerID&#34; na tabela.
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
Substituir os nomes de coluna &#34;CustomerNum&#34; por &#34;CustomerID&#34; e &#34;PhoneNum&#34; por &#34;Phone&#34; na tabela.
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
Substituir o nome de coluna &#34;NewCol&#34; por &#34;NewColumn&#34; na tabela e ignorar se a coluna não existir.
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
