---
title: Duration.TotalHours
---

# Duration.TotalHours


この期間に含まれる合計時間数を返します。


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Remarks

<code>duration</code> が割り当てられた合計時間数を返します。


## Examples

### Example #1 
期間の値が割り当てられた合計時間数を検索します。
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
