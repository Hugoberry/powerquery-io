---
title: Record.FromTable
---

# Record.FromTable


## Description

Crea un registre a partir d&#39;una taula amb la forma \{[Name = name, Value = value]}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Details

Retorna un registre a partir d'una taula de registres <code>table</code> que conté noms de camp i noms de valor <code>\{[Name = name, Value = value]}</code>. Es produeix una excepció si els noms de camp no són únics.


## Examples

### Example #1 
Crea un registre a partir de la taula amb el format Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}).
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
