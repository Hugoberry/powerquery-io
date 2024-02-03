---
title: Time.Hour
---

# Time.Hour


## Description

時間部分を返します。


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Details

指定された <code>time</code>、<code>datetime</code>、または <code>datetimezone</code> 値 (<code>dateTime</code>) の時間部分を返します。


## Examples

### Example #1 
#datetime(2011, 12, 31, 9, 15, 36) で時間を探します。
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
