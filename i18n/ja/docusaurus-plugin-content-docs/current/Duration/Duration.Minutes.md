---
title: Duration.Minutes
---

# Duration.Minutes


## Description

期間の分の部分を返します。


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Details

<code>duration</code> の分の部分を返します。


## Examples

### Example #1 
期間の値から分を抽出します。
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
