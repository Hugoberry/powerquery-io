---
title: Duration.FromText
---

# Duration.FromText


從文字的經過時間格式 (d.h:m:s) 傳回持續時間值。


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

從指定的文字 `text` 傳回持續時間值。這個函數可剖析下列格式:

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(內含所有範圍)

-   ddd: 天數。
-   hh: 小時數，介於 0 到 23 之間。
-   mm: 分鐘數，介於 0 到 59 之間。
-   ss: 秒數，介於 0 到 59 之間。
-   ff: 小數秒數，介於 0 到 9999999 之間。


## Examples

### Example #1
將 `"2.05:55:20"` 轉換成 `duration` 值。
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
