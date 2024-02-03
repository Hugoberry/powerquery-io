---
title: Date.DayOfYear
---

# Date.DayOfYear


## Description

年の通算日を表す 1 ～ 366 の数値を返します。


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Details

指定された <code>date</code>、<code>datetime</code>、または <code>datetimezone</code> 値 (<code>dateTime</code>) の、年の通算日を表す数値を返します。


## Examples

### Example #1 
2011 年 3 月 1 日の年の日付。
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
