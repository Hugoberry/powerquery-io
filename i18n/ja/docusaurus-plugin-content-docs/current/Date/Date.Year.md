---
title: Date.Year
---

# Date.Year


## Description

年部分を返します。


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Details

指定された <code>datetime</code> 値 (<code>dateTime</code>) の年部分を返します。


## Examples

### Example #1 
#datetime(2011, 12, 31, 9, 15, 36) で年を調べます。
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
