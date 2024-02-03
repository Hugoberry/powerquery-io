---
title: Table.First
---

# Table.First


## Description

Tiek atgriezta pirmā rinda vai norādītā noklusējuma vērtība.


## Syntax

```powerquery
Table.First(
    table as table,
    optional default as any
) as any
```


## Details

Tiek atgriezta <code>table</code> pirmā rinda vai neobligāta noklusējuma vērtība <code>default</code>, ja tabula ir tukša.


## Examples

### Example #1 
Atrodiet tabulas pirmo rindu.
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
Atrodiet tabulas &lt;code&gt;(\{})&lt;/code&gt; pirmo rindu vai tiek atgriezts [a = 0, b = 0], ja tukšs.
```powerquery
Table.First(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
