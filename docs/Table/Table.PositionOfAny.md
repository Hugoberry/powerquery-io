---
title: Table.PositionOfAny
---

# Table.PositionOfAny


## Description

Returns the position or positions of any of the specified rows within the table.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Details

Returns the row(s) position(s) from the <code>table</code> of the first occurrence of the list of <code>rows</code>. Returns -1 if no occurrence is found.    <ul>    <li><code>table</code>: The input table.</li>       <li><code>rows</code>:  The list of rows in the table to find the positions of.</li>       <li><code>occurrence</code>: <i>[Optional]</i> Specifies which occurrences of the row to return.</li>       <li><code>equationCriteria</code>: <i>[Optional]</i> Controls the comparison between the table rows.</li>    </ul>    


## Examples

### Example #1 
Find the position of the first occurrence of [a = 2, b = 4] or [a = 6, b = 8] in the table &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2 
Find the position of all the occurrences of [a = 2, b = 4] or [a = 6, b = 8] in the table &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt;.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
