---
title: List.Durations
---

# List.Durations


指定された初期値、数、および増分期間値に基づいて、期間値のリストを生成します。


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Remarks

<code>start</code> で始まり、指定された <code>duration</code> <code>step</code> で増分される <code>count</code> 個の <code>duration</code> 値のリストを返します。


## Examples

### Example #1 
1 時間から始まり、1 時間ずつ増分される 5 個の値を作成します。
```powerquery
List.Durations(#duration(0, 1, 0, 0), 5, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #duration(0, 1, 0, 0),
    #duration(0, 2, 0, 0),
    #duration(0, 3, 0, 0),
    #duration(0, 4, 0, 0),
    #duration(0, 5, 0, 0)
}
```




## Category
List.Generators
