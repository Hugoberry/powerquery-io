---
title: Table.PositionOfAny
---

# Table.PositionOfAny


テーブル内の指定されたいずれかの行の位置を返します。


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Remarks

最初に出現する <code>rows</code> の一覧の <code>table</code> から行の位置を返します。1 つも出現しない場合は -1 を返します。    <ul>    <li><code>table</code>: 入力テーブル。</li>       <li><code>rows</code>: 位置を調べるテーブル内の行の一覧。</li>       <li><code>occurrence</code>: <i>[省略可能]</i> 出現するどの行を返すかを指定します。</li>       <li><code>equationCriteria</code>: <i>[省略可能]</i> テーブルの行と行の比較を制御します。</li>    </ul>    


## Examples

### Example #1 
テーブル &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; で最初に出現する [a = 2, b = 4] または [a = 6, b = 8] の位置を調べます。
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
テーブル &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt; で出現するすべての [a = 2, b = 4] または [a = 6, b = 8] の位置を調べます。
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
