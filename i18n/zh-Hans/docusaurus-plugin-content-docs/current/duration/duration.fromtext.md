---
title: Duration.FromText
---

# Duration.FromText


从文本形式的占用时间格式(d.h:m:s)返回持续时间值。


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

从指定文本 `text` 返回持续时间值。此函数可分析以下格式:

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(包括所有范围)

-   ddd: 天数。
-   hh: 小时数，介于 0 到 23 之间。
-   mm: 分钟数，介于 0 到 59 之间。
-   ss: 秒数，介于 0 到 59 之间。
-   ff: 秒的小数部分，介于 0 到 9999999 之间。


## Examples

### Example #1
将 `"2.05:55:20"` 转换为 `duration` 值。
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
