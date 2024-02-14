---
title: List.Dates
---

# List.Dates


指定された初期値、数、および増分期間値に基づいて、date 値のリストを生成します。


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Remarks

<code>start</code> で始まりサイズが <code>count</code> の <code>date</code> 値のリストを返します。指定された増分 <code>step</code> は、すべての値に追加される <code>duration</code> 値です。


## Examples

### Example #1 
大晦日から始まり (#date(2011, 12, 31))、1 日ずつ増分される (#duration(1, 0, 0, 0)) 5 個の値のリストを作成します。
```powerquery
List.Dates(#date(2011, 12, 31), 5, #duration(1, 0, 0, 0))
```

Result: 
```powerquery
{
    #date(2011, 12, 31),
    #date(2012, 1, 1),
    #date(2012, 1, 2),
    #date(2012, 1, 3),
    #date(2012, 1, 4)
}
```




## Category
List.Generators
