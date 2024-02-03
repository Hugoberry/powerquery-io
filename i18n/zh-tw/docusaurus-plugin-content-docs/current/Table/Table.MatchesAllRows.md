---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


## Description

指出資料表中的所有資料列是否都符合指定的條件。


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Details

指出 <code>table</code> 中的所有資料列是否都符合指定的 <code>condition</code>。如果所有資料列都符合，則傳回 <code>true</code>，否則傳回 <code>false</code>。


## Examples

### Example #1 
判斷資料表中 [a] 資料行的所有資料列值是否都是偶數。
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
找出資料表 &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; 中所有資料列值是否都是 [a = 1, b = 2]。
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
