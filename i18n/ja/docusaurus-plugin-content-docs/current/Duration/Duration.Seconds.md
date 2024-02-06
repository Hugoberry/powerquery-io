---
title: Duration.Seconds
---

# Duration.Seconds


期間の秒の部分を返します。


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Remarks

<code>duration</code> の秒の部分を返します。


## Examples

### Example #1 
期間の値から秒を抽出します。
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
