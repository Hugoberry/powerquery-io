---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


曜日名を返します。


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Remarks

指定された <code>date</code> の曜日名を返します。省略可能な <code>culture</code> を指定することもできます (例: "en-US")。


## Examples

### Example #1 
曜日名を取得します。
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
