---
title: Record.FromTable
---

# Record.FromTable


## Description

Cria um registo a parti de uma tabela com o formato \{[Name = name, Value = value]}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Details

Devolve um registo a partir de uma tabela de registos <code>table</code> que contém nomes de campos e nomes de valores <code>\{[Name = name, Value = value]}</code>. É emitida uma exceção se os nomes dos campos não forem exclusivos.


## Examples

### Example #1 
Criar um registo a partir de uma tabela com o formato Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}).
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
