---
title: Date.MonthName
---

# Date.MonthName


傳回月份元件的名稱。


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Remarks

傳回所提供 <code>date</code> 的月份元件名稱。也可提供選用的 <code>culture</code> (例如 "en-US")。


## Examples

### Example #1 
取得月份名稱。
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
