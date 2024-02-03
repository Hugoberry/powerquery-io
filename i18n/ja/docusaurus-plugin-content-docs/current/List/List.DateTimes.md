---
title: List.DateTimes
---

# List.DateTimes


## Description

指定された初期値、数、および増分期間値に基づいて、datetime 値のリストを生成します。


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Details

<code>start</code> で始まりサイズが <code>count</code> の <code>datetime</code> 値のリストを返します。指定された増分 <code>step</code> は、すべての値に追加される <code>duration</code> 値です。


## Examples

### Example #1 
元日の 5 分前から始まり (#datetime(2011, 12, 31, 23, 55, 0))、1 分ずつ増分される (#duration(0, 0, 1, 0)) 10 個の値のリストを作成します。
```powerquery
List.DateTimes(#datetime(2011, 12, 31, 23, 55, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetime(2011, 12, 31, 23, 55, 0),
    #datetime(2011, 12, 31, 23, 56, 0),
    #datetime(2011, 12, 31, 23, 57, 0),
    #datetime(2011, 12, 31, 23, 58, 0),
    #datetime(2011, 12, 31, 23, 59, 0),
    #datetime(2012, 1, 1, 0, 0, 0),
    #datetime(2012, 1, 1, 0, 1, 0),
    #datetime(2012, 1, 1, 0, 2, 0),
    #datetime(2012, 1, 1, 0, 3, 0),
    #datetime(2012, 1, 1, 0, 4, 0)
}
```




## Category
List.Generators
