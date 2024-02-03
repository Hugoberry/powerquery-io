---
title: Table.ContainsAny
---

# Table.ContainsAny


## Description

指定されたいずれかのレコードがテーブルに行として含まれているかどうかを示します。


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

レコードのリスト <code>rows</code> で指定されたいずれかのレコードが <code>table</code> に行として含まれているかどうかを示します。    省略可能なパラメーター <code>equationCriteria</code> を指定すると、テーブルの行と行の比較を制御できます。


## Examples

### Example #1 
テーブル &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; に行 &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; または &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; が含まれているかどうかを調べます。
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
テーブル &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; に行 &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; または &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; が含まれているかどうかを調べます。
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
列 [a] のみを比較して、テーブル &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; に行 &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; または &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; が含まれているかどうかを調べます。
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
