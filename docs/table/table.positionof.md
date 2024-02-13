---
title: Table.PositionOf
---

# Table.PositionOf


Returns the position or positions of the row within the table.


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Remarks

Returns the row position of the first occurrence of the <code>row</code> in the <code>table</code> specified. Returns -1 if no occurrence is found.    <ul>       <li><code>table</code>: The input table.</li>       <li><code>row</code>: The row in the table to find the position of.</li>       <li><code>occurrence</code>: <i>[Optional]</i> Specifies which occurrences of the row to return.</li>       <li><code>equationCriteria</code>: <i>[Optional]</i> Controls the comparison between the table rows.</li>    </ul>    


## Examples

### Example #1 
Find the position of the first occurrence of [a = 2, b = 4] in the table &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4]
)
```

Result: 
```powerquery
0
```


### Example #2 
Find the position of the second occurrence of [a = 2, b = 4] in the table &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    1
)
```

Result: 
```powerquery
2
```


### Example #3 
Find the position of all the occurrences of [a = 2, b = 4] in the table &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    Occurrence.All
)
```

Result: 
```powerquery
{0, 2}
```




## Category
Table.Membership
