---
title: Table.ContainsAll
---

# Table.ContainsAll


## Description

Көрсетілген жазбалардың барлығы кестеде жолдар ретінде пайда болатынын көрсетеді.


## Syntax

```powerquery
Table.ContainsAll(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

<code>rows</code> жазбалар тізіміндегі барлық көрсетілген жазбалар <code>table</code> ішінде жолдар ретінде пайда болатынын көрсетеді.    Кестенің жолдарын салыстыруды басқару үшін <code>equationCriteria</code> міндетті емес параметрін көрсетуге болады.


## Examples

### Example #1 
Тек [CustomerID] бағанын салыстыру арқылы кестеде барлық жолдардың болуын анықтау.
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    },
    "CustomerID"
)
```

Result: 
```powerquery
true
```


### Example #2 
Кестеде барлық жолдардың болуын анықтау.
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    }
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
