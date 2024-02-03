---
title: Record.FromTable
---

# Record.FromTable


## Description

Crea un rexistro dunha táboa do formato \{[Name = name, Value = value]}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Details

Devolve un rexistro dunha táboa de rexistros <code>table</code> que contén nomes de campo e nomes de valores <code>\{[Name = name, Value = value]}</code>. Se os nomes de campo non son únicos, xérase unha excepción.


## Examples

### Example #1 
Crear un rexistro dunha táboa do formato Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}).
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
