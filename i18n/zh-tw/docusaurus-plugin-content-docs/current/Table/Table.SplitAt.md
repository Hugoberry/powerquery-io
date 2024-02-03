---
title: Table.SplitAt
---

# Table.SplitAt


## Description

傳回清單，內含指定的前幾個計數資料列及其餘的資料列。


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Details

傳回包含兩個資料表的清單: 一個資料表具有 <code>table</code> 的前 N 列 (由 <code>count</code> 所指定)，另一個資料表包含 <code>table</code> 的其餘資料列。如果產生之清單的資料表剛好按順序列舉一次，則函式只會列舉 <code>table</code> 一次。


## Examples

### Example #1 
傳回資料表的前兩列，以及資料表的其餘資料列。
```powerquery
Table.SplitAt(#table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}), 2)
```

Result: 
```powerquery
{
    #table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}}),
    #table({"a", "b", "c"}, {{7, 8, 9}})
}
```




## Category
Table.Row operations
