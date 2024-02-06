---
title: Table.ContainsAny
---

# Table.ContainsAny


Indicates whether any of the specified records appear as rows in the table.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indicates whether any the specified records in the list of records <code>rows</code>, appear as rows in the <code>table</code>.    An optional parameter <code>equationCriteria</code> may be specified to control comparison between the rows of the table.


## Examples

### Example #1 
Determine if the table &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; contains the rows &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; or &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Determine if the table &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; contains the rows &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; or &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Determine if the table &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; contains the rows &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; or &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; comparing only the column [a].
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
