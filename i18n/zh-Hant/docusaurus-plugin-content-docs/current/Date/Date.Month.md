---
title: Date.Month
---

# Date.Month


傳回月元件。


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Remarks

傳回提供的 `datetime` 值 `dateTime` 的月元件。


## Examples

### Example #1
找出 #datetime(2011, 12, 31, 9, 15, 36) 中的月份。
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
