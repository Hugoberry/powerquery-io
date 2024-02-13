---
title: Table.ReplaceRows
---

# Table.ReplaceRows


指定された範囲の行を指定された行に置き換えます。


## Syntax

```powerquery
Table.ReplaceRows(
    table as table,
    offset as number,
    count as number,
    rows as list
) as table
```


## Remarks

入力 <code>table</code> で、<code>offset</code> 行後から、指定された数の行 (<code>count</code> 行) を指定された <code>rows</code> に置き換えます。<code>rows</code> パラメーターは、レコードの一覧です。    <ul>       <li><code>table</code>: 置換を実行するテーブル。</li>       <li><code>offset</code>: 置換を行う前にスキップする行の数。</li>       <li><code>count</code>: 置き換える行の数。</li>       <li><code>rows</code>: <code>offset</code> で指定された位置の <code>table</code> に挿入する行レコードの一覧。</li>    </ul>


## Examples

### Example #1 
位置 1 から 3 つの行を置き換えます。
```powerquery
Table.ReplaceRows(
    Table.FromRecords({
        [Column1 = 1],
        [Column1 = 2],
        [Column1 = 3],
        [Column1 = 4],
        [Column1 = 5]
    }),
    1,
    3,
    {[Column1 = 6], [Column1 = 7]}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1],
    [Column1 = 6],
    [Column1 = 7],
    [Column1 = 5]
})
```




## Category
Table.Row operations
