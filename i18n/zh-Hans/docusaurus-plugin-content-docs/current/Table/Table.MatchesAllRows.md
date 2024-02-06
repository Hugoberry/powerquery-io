---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


指示是否表中的所有行都满足给定的条件。


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Remarks

指示是否 <code>table</code> 中的所有行都满足给定的 <code>condition</code>。如果所有行都匹配，则返回 <code>true</code>；否则返回 <code>false</code>。


## Examples

### Example #1 
确定列 [a] 中的所有行值是否在表中。
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
true
```


### Example #2 
查找在表 &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; 中，是否所有行值均为 [a = 1, b = 2]。
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
false
```




## Category
Table.Row operations
