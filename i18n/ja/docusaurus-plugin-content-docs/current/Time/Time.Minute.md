---
title: Time.Minute
---

# Time.Minute


## Description

分部分を返します。


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Details

指定された <code>time</code>、<code>datetime</code>、または <code>datetimezone</code> 値 (<code>dateTime</code>) の分部分を返します。


## Examples

### Example #1 
#datetime(2011, 12, 31, 9, 15, 36) で分を探します。
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
