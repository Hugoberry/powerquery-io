---
title: Record.FromTable
---

# Record.FromTable


Cria um registo a parti de uma tabela com o formato \{\[Name = name, Value = value\]\}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Devolve um registo a partir de uma tabela de registos `table` que contém nomes de campos e nomes de valores `{[Name = name, Value = value]}`. É gerado um erro se os nomes dos campos não forem exclusivos.


## Examples

### Example #1
Criar um registo a partir de uma tabela com o formato Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}).
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
