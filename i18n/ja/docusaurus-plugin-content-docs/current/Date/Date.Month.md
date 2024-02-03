---
title: Date.Month
---

# Date.Month


## Description

月部分を返します。


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Details

指定された <code>datetime</code> 値 (<code>dateTime</code>) の月部分を返します。


## Examples

### Example #1 
#datetime(2011, 12, 31, 9, 15, 36) で月を調べます。
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
