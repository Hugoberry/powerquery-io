---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


この期間に含まれる合計分数を返します。


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Remarks

<code>duration</code> が割り当てられた合計分数を返します。


## Examples

### Example #1 
期間の値が割り当てられた合計分数を検索します。
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
