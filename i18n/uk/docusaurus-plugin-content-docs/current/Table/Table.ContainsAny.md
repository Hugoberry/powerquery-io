---
title: Table.ContainsAny
---

# Table.ContainsAny


## Description

Визначає, чи відображається будь-який із вказаних записів таблиці у вигляді рядка.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Визначає, чи відображається будь-який із вказаних записів у списку записів <code>rows</code> у <code>table</code> у вигляді рядка.    Можна вказати додатковий параметр <code>equationCriteria</code> для керування порівнянням рядків таблиці.


## Examples

### Example #1 
Визначити, чи містяться в таблиці &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; рядки &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; або &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Визначити, чи містяться в таблиці &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; рядки &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; або &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Визначити, чи містяться в таблиці &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; рядки &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; або &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;, порівнюючи лише стовпець [a].
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
