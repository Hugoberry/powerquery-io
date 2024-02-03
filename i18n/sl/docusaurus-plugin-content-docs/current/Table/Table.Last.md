---
title: Table.Last
---

# Table.Last


## Description

Vrne zadnjo vrstico ali navedeno privzeto vrednost.


## Syntax

```powerquery
Table.Last(
    table as table,
    optional default as any
) as any
```


## Details

Vrne zadnjo vrstico tabele <code>table</code> ali izbirno privzeto vrednost, <code>default</code>, če je tabela prazna.


## Examples

### Example #1 
Poiščite zadnjo vrstico tabele.
```powerquery
Table.Last(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 3, Name = "Paul", Phone = "543-7890"]
```


### Example #2 
Poiščite zadnjo vrstico tabele &lt;code&gt;(\{})&lt;/code&gt; ali vrnite [a = 0, b = 0], če je prazna.
```powerquery
Table.Last(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
