---
title: Table.IsEmpty
---

# Table.IsEmpty


## Description

Кестеде қандай да бір жолдың бар не жоқ болуын көрсетеді.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Details

<code>table</code> кез келген жолдарды қамтитынын көрсетеді. Ешқандай жол жоқ болса (яғни, кесте бос болса), <code>true</code> мәнін, керісінше жағдайда <code>false</code> мәнін қайтарады.


## Examples

### Example #1 
Кестенің бос екенін анықтау.
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
&lt;code&gt;(\{})&lt;/code&gt; кестесінің бостығын анықтау.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
