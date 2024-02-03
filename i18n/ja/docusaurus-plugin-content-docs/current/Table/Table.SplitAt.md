---
title: Table.SplitAt
---

# Table.SplitAt


## Description

最初の行 (指定された数の行) と残りの行を含むリストを返します。


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Details

2 つのテーブルを含むリストを返します。<code>table</code> の先頭 N 行 (<code>count</code> によって指定された) を含むテーブルと、<code>table</code> の残りの行を含むテーブルです。結果として得られるリストのテーブルが 1 回だけ順番に列挙される場合は、関数は 1 回だけ <code>table</code> を列挙します。


## Examples

### Example #1 
テーブルの最初の 2 行と、テーブルの残りの行を返します。
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
