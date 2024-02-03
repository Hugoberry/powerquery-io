---
title: Time.Minute
---

# Time.Minute


## Description

傳回分鐘元件。


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Details

傳回提供的 <code>time</code>、<code>datetime</code> 或 <code>datetimezone</code> 值 <code>dateTime</code> 的分鐘元件。


## Examples

### Example #1 
尋找 #datetime(2011, 12, 31, 9, 15, 36) 的分鐘。
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
