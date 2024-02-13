---
title: Record.FromTable
---

# Record.FromTable


Cria um registro de uma tabela no formato \{[Name = name, Value = value]}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Retorna um registro de uma tabela de registros <code>table</code> que contêm nomes de campo e nomes de valor <code>\{[Name = name, Value = value]}</code>. Uma exceção será lançada se os nomes de campo não forem exclusivos.


## Examples

### Example #1 
Criar um registro a partir da tabela no formato Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}).
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
