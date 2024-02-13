---
title: Table.ContainsAny
---

# Table.ContainsAny


Указывает, появляется ли любая из указанных записей в виде строки в таблице.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Указывает, появляется ли любая запись, указанная в списке записей <code>rows</code>, в виде строки в <code>table</code>.    Для управления сравнением строк таблицы может быть указан необязательный параметр <code>equationCriteria</code>.


## Examples

### Example #1 
Определить, содержит ли таблица &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; строку &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; или &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Определить, содержит ли таблица &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; строку &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; или &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Определить, содержит ли таблица &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; строку &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; или &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;, сравнивая только столбец [a].
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
