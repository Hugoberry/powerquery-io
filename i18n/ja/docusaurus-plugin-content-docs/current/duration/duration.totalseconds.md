---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


この期間に含まれる合計秒数を返します。


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Remarks

<code>duration</code> が割り当てられた合計秒数を返します。


## Examples

### Example #1 
期間の値が割り当てられた合計秒数を検索します。
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
