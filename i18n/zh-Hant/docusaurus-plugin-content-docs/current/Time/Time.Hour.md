---
title: Time.Hour
---

# Time.Hour


傳回小時元件。


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Remarks

傳回提供的 <code>time</code>、<code>datetime</code> 或 <code>datetimezone</code> 值 <code>dateTime</code> 的小時元件。


## Examples

### Example #1 
尋找 #datetime(2011, 12, 31, 9, 15, 36) 的小時。
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
