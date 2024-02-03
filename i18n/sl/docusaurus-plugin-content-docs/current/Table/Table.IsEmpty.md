---
title: Table.IsEmpty
---

# Table.IsEmpty


## Description

Označuje, ali tabela vsebuje vrstice.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Details

Označuje, ali tabela <code>table</code> vsebuje vrstice. Vrne <code>true</code>, če ni vrstic, (tj. tabela je prazna), sicer vrne <code>false</code>.


## Examples

### Example #1 
Ugotovite, ali je tabela prazna.
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
Ugotovite, ali je tabela &lt;code&gt;(\{})&lt;/code&gt; prazna.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
