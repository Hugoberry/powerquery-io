---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


傳回星期幾名稱。


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Remarks

傳回所提供 <code>date</code> 的星期幾名稱。也可提供選用的 <code>culture</code> (例如 "en-US")。


## Examples

### Example #1 
取得星期幾名稱。
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
