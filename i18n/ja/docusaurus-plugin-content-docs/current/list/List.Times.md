---
title: List.Times
---

# List.Times


指定された初期値、数、および増分期間値に基づいて、time 値のリストを生成します。


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Remarks

<code>start</code> で始まりサイズが <code>count</code> の <code>time</code> 値のリストを返します。指定された増分 <code>step</code> は、すべての値に追加される <code>duration</code> 値です。


## Examples

### Example #1 
正午から始まり (#time(12, 0, 0))、1 時間ずつ増分される (#duration(0, 1, 0, 0)) 4 つの値のリストを作成します。
```powerquery
List.Times(#time(12, 0, 0), 4, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #time(12, 0, 0),
    #time(13, 0, 0),
    #time(14, 0, 0),
    #time(15, 0, 0)
}
```




## Category
List.Generators
