---
title: Date.MonthName
---

# Date.MonthName


## Description

月部分の名前を返します。


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Details

指定された <code>date</code> の月部分の名前を返します。省略可能な <code>culture</code> を指定することもできます (例: "en-US")。


## Examples

### Example #1 
月の名前を取得します。
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
