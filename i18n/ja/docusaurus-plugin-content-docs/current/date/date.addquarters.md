---
title: Date.AddQuarters
---

# Date.AddQuarters


指定された四半期を日付に追加します。


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

`datetime` 値 `dateTime` に `numberOfQuarters` 四半期を追加した結果の `date`、`datetime`、または `datetimezone` を返します。

-   `dateTime`: 四半期が追加される `date`、`datetime`、または `datetimezone` 値。
-   `numberOfQuarters`: 追加する四半期の数。


## Examples

### Example #1
日付 5/14/2011 を表す `date`、`datetime`、または `datetimezone` 値に 1 四半期を追加します。
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
