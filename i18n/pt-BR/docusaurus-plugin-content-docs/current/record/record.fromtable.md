---
title: Record.FromTable
---

# Record.FromTable


Cria um registro de uma tabela no formato \{\[Name = name, Value = value\]\}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Retorna um registro de uma tabela de registros `table` contendo nomes de campos e nomes de valores `{[Name = name, Value = value]}`. Um erro será gerado se os nomes de campo não forem exclusivos.


## Examples

### Example #1
Criar um registro a partir da tabela no formato Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}).
```powerquery
Record.FromTable(
    Table.FromRecords({
        [Name = "CustomerID", Value = 1],
        [Name = "Name", Value = "Bob"],
        [Name = "Phone", Value = "123-4567"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
