---
title: Duration.Hours
---

# Duration.Hours


## Description

期間の時間の部分を返します。


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Details

<code>duration</code>の時間の部分を返します。


## Examples

### Example #1 
期間の値から時間を抽出します。
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
