---
title: List.Average
---

# List.Average


## Description

値の平均を返します。数、日付、日時、日付タイムゾーン、および期間の値に対して有効です。


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

リスト <code>list</code> 内の項目の平均値を返します。結果はリスト内の値と同じデータ型で返されます。数、日付、時刻、日時、日付タイムゾーン、および期間の値に対してのみ有効です。    リストが空の場合、NULL が返されます。


## Examples

### Example #1 
数値のリスト &lt;code&gt;\{3, 4, 6}&lt;/code&gt; の平均を求めます。
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
2011 年 1 月 1 日、2011 年 1 月 2 日、および 2011 年 1 月 3 日の日付値の平均を求めます。
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
