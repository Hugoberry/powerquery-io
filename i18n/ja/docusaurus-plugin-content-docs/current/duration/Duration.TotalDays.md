---
title: Duration.TotalDays
---

# Duration.TotalDays


この期間に含まれる合計日数を返します。


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Remarks

<code>duration</code> が割り当てられた合計日数を返します。


## Examples

### Example #1 
期間の値が割り当てられた合計日数を検索します。
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
