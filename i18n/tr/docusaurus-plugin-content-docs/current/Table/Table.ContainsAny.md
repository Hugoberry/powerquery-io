---
title: Table.ContainsAny
---

# Table.ContainsAny


Belirtilen kayıtlardan herhangi birinin tabloda satır olarak görünüp görünmediğini gösterir.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

<code>rows</code> kayıt listesindeki belirtilen kayıtlardan herhangi birinin <code>table</code> içinde satır olarak görünüp görünmediğini gösterir.    Tablonun satırları arasındaki karşılaştırmayı denetlemek üzere <code>equationCriteria</code> isteğe bağlı parametresi belirtilebilir.


## Examples

### Example #1 
&lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; tablosunun &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; veya &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; satırlarını içerip içermediğini belirler.
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
&lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; tablosunun &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; veya &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; satırlarını içerip içermediğini belirler.
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
&lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; tablosunun &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; veya &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; satırlarını içerip içermediğini yalnıza [a] sütununu karşılaştırarak belirler.
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
