---
title: Date.Year
---

# Date.Year


## Description

傳回年元件。


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Details

傳回提供的 <code>datetime</code> 值 <code>dateTime</code> 的年元件。


## Examples

### Example #1 
找出 #datetime(2011, 12, 31, 9, 15, 36) 中的年度。
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
