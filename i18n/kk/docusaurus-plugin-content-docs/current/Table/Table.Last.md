---
title: Table.Last
---

# Table.Last


## Description

Соңғы жолды немесе көрсетілген әдепкі мәнді қайтарады.


## Syntax

```powerquery
Table.Last(
    table as table,
    optional default as any
) as any
```


## Details

<code>table</code> соңғы жолын немесе кесте бос болса, <code>default</code> міндетті емес әдепкі мәнін қайтарады.


## Examples

### Example #1 
Кестенің соңғы жолын анықтау.
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
&lt;code&gt;(\{})&lt;/code&gt; кестесінің соңғы жолын анықтау немесе бос болса, [a = 0, b = 0] қайтару.
```powerquery
Table.Last(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
