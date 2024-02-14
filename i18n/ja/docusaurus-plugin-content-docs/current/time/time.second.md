---
title: Time.Second
---

# Time.Second


秒部分を返します。


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Remarks

指定された <code>time</code>、<code>datetime</code>、または <code>datetimezone</code> 値 (<code>dateTime</code>) の秒部分を返します。


## Examples

### Example #1 
datetime 値で秒の値を探します。
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
