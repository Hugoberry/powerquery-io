---
title: Table.ReplaceRows
---

# Table.ReplaceRows


## Description

以提供的資料列取代指定範圍的資料列。


## Syntax

```powerquery
Table.ReplaceRows(
    table as table,
    offset as number,
    count as number,
    rows as list
) as table
```


## Details

以指定的 <code>rows</code> 取代輸入 <code>table</code> 中指定數目的資料列 <code>count</code>，從 <code>offset</code> 之後開始。<code>rows</code> 參數是記錄的清單。    <ul>       <li><code>table</code>: 執行取代的資料表。</li>       <li><code>offset</code>: 要在進行取代之前略過的資料列數目。</li>       <li><code>count</code>: 要取代的資料列數目。</li>       <li><code>rows</code>: 要依照 <code>offset</code> 指定的位置插入 <code>table</code> 中的資料列記錄清單。</li>    </ul>


## Examples

### Example #1 
從位置 1 開始，取代 3 個資料列。
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
