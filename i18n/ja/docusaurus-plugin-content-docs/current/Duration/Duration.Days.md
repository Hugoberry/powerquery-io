---
title: Duration.Days
---

# Duration.Days


## Description

期間の日数の部分を返します。


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Details

<code>duration</code>の日数の部分を返します。


## Examples

### Example #1 
2 つの日付の間の日数を抽出します。
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
