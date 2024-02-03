---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


## Description

指出資料表中的任何資料列是否都符合指定的條件。


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Details

指出 <code>table</code> 中的任何資料列是否都符合指定的 <code>condition</code>。如果任何資料列都符合，則傳回 <code>true</code>，否則傳回 <code>false</code>。


## Examples

### Example #1 
判斷資料表 &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt; 中資料行 [a] 的任何資料列值是否都是偶數。
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 3, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
false
```


### Example #2 
判斷資料表 &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; 中任何資料列值是否都是 [a = 1, b = 2]。
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
true
```




## Category
Table.Row operations
