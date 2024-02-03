---
title: Table.Last
---

# Table.Last


## Description

Vraća poslednji red ili navedenu podrazumevanu vrednost.


## Syntax

```powerquery
Table.Last(
    table as table,
    optional default as any
) as any
```


## Details

Vraća poslednji red iz <code>table</code> ili opcionalnu podrazumevanu vrednost, <code>default</code>, ako je tabela prazna.


## Examples

### Example #1 
Pronalaženje poslednjeg reda iz tabele.
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
Pronalaženje poslednjeg reda iz tabele &lt;code&gt;(\{})&lt;/code&gt; ili vraćanje [a = 0, b = 0] ako je tabela prazna.
```powerquery
Table.Last(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
