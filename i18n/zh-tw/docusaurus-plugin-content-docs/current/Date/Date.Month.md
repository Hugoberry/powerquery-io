---
title: Date.Month
---

# Date.Month


## Description

傳回月元件。


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Details

傳回提供的 <code>datetime</code> 值 <code>dateTime</code> 的月元件。


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
