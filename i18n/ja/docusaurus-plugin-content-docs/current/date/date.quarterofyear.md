---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


日付がどの四半期に該当するかを示す数値を返します。


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

日付 `dateTime` がどの四半期に該当するかを示す 1 ～ 4 の数値を返します。`dateTime` は `date`、`datetime`、または `datetimezone` 値にすることができます。


## Examples

### Example #1
日付 #date(2011, 12, 31) がどの四半期に該当するかを調べます。
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
