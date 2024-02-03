---
title: Table.IsEmpty
---

# Table.IsEmpty


## Description

Pokazuje da li tabela sadrži redove.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Details

Pokazuje da li <code>table</code> tabela sadrži redove. Vraća <code>true</code> ako nema redova (tj. tabela je prazna), a <code>false</code> ako ih ima.


## Examples

### Example #1 
Utvrđivanje da li je tabela prazna.
```powerquery
Table.IsEmpty(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
false
```


### Example #2 
Utvrđivanje da li je tabela &lt;code&gt;(\{})&lt;/code&gt; prazna.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
