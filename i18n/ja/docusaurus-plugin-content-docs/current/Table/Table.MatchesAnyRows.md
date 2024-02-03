---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


## Description

テーブル内のいずれかの行が指定された条件を満たしているかどうかを示します。


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Details

<code>table</code> 内のいずれかの行が指定された <code>condition</code> と一致しているかどうかを示します。いずれかの行が一致する場合は <code>true</code>、それ以外の場合は <code>false</code> を返します。


## Examples

### Example #1 
テーブル &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt; の列 [a] のいずれかの行の値が偶数かどうかを調べます。
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
テーブル &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; のいずれかの行の値が [a = 1, b = 2] かどうかを調べます。
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
