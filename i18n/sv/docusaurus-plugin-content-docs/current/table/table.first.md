---
title: Table.First
---

# Table.First


Returnerar den första raden eller ett angivet standardvärde.


## Syntax

```powerquery
Table.First(
    table as table,
    optional default as any
) as any
```


## Remarks

Returnerar den första raden i <code>table</code> eller ett valfritt standardvärde, <code>default</code> om tabellen är tom.


## Examples

### Example #1 
Hitta den första raden i tabellen.
```powerquery
Table.First(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
Hitta den första raden i tabellen &lt;code&gt;(\{})&lt;/code&gt; eller returnera [a = 0, b = 0] om den är tom.
```powerquery
Table.First(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
