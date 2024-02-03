---
title: Table.Last
---

# Table.Last


## Description

Returnerer den sidste række eller en angivet standardværdi.


## Syntax

```powerquery
Table.Last(
    table as table,
    optional default as any
) as any
```


## Details

Returnerer den sidste række i <code>table</code> eller en valgfri standardværdi, <code>default</code>, hvis tabellen er tom.


## Examples

### Example #1 
Find den sidste række i tabellen.
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
Find den sidste række i tabellen &lt;code&gt;(\{})&lt;/code&gt;, eller returner [a = 0, b = 0], hvis tabellen er tom.
```powerquery
Table.Last(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
