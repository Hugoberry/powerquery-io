---
title: Table.IsDistinct
---

# Table.IsDistinct


## Description

Кестеде тек бірегей жолдардың (көшірмелері жоқ) болуын көрсетеді.


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Details

<code>table</code> тек бірегей жолдарды (көшірмелері жоқ) қамтитынын көрсетеді. Жолдар бірегей болса, <code>true</code> мәнін, олай болмаса <code>false</code> мәнін қайтарады.    <code>comparisonCriteria</code> міндетті емес параметрі кестенің қай бағандарында көшірмелер бар-жоғы тексерілетінін көрсетеді. Егер <code>comparisonCriteria</code> көрсетілмеген болса, барлық бағандар тексеріледі.


## Examples

### Example #1 
Кестенің бірегей екенін анықтау.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
true
```


### Example #2 
Кестенің бағанда бірегей екенін анықтау.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 5, Name = "Bob", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
