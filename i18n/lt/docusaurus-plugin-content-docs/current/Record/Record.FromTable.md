---
title: Record.FromTable
---

# Record.FromTable


## Description

Sukuriamas įrašas iš lentelės, kurios forma \{[Name = name, Value = value]}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Details

Pateikiamas įrašas iš įrašų lentelės <code>table</code> su laukų ir reikšmių pavadinimais <code>\{[Name = name, Value = value]}</code>. Jei laukų pavadinimai neunikalūs, pateikiama išimtis.


## Examples

### Example #1 
Sukurkite įrašą iš lentelės, kurios forma Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}).
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
