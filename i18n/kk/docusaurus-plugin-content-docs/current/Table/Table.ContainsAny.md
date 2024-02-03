---
title: Table.ContainsAny
---

# Table.ContainsAny


## Description

Көрсетілген жазбалардың кез келгені кестеде жолдар ретінде пайда болатынын көрсетеді.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

<code>rows</code> жазбалар тізіміндегі көрсетілген жазбалардың кез келгені <code>table</code> ішінде жолдар ретінде пайда болатынын көрсетеді.    Кестенің жолдарын салыстыруды басқару үшін <code>equationCriteria</code> міндетті емес параметрін көрсетуге болады.


## Examples

### Example #1 
&lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; кестесі &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; немесе &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; жолын қамтитынын анықтау.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 2],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
true
```


### Example #2 
&lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; кестесі &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; немесе &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; жолын қамтитынын анықтау.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
false
```


### Example #3 
Тек [a] бағанын салыстырып, &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; кестесі &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; немесе &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; жолын қамтитынын анықтау.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    },
    "a"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
