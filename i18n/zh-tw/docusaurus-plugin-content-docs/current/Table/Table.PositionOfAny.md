---
title: Table.PositionOfAny
---

# Table.PositionOfAny


## Description

傳回任何指定之資料列在資料表中的位置。


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

傳回 <code>table</code> 中第一次出現 <code>rows</code> 清單的資料列位置。如果找不到出現次數，則傳回 -1。    <ul>    <li><code>table</code>: 輸入資料表。</li>       <li><code>rows</code>: 要在資料表中尋找其位置的資料列清單。</li>       <li><code>occurrence</code>: [選擇性]<i></i> 指定要傳回的資料列出現次數。</li>       <li><code>equationCriteria</code>: [選擇性]<i></i> 控制資料表資料列之間的比較方式。</li>    </ul>    


## Examples

### Example #1 
尋找資料表 &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; 中第一次出現 [a = 2, b = 4] 或 [a = 6, b = 8] 的位置。
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
尋找資料表 &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt; 中出現 [a = 2, b = 4] 或 [a = 6, b = 8] 的所有位置。
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
