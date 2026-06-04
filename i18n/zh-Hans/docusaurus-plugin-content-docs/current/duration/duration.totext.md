---
title: Duration.ToText
---

# Duration.ToText


返回采用 "d.h:m:s" 格式的文本。


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

返回给定持续时间值 `duration` 的 "day.hour:mins:sec" 格式文本表示形式。

-   `duration`: 计算文本表示形式所依据的`duration`
-   `format`: *(可选)* 已弃用，如果不为 null，将引发错误。


## Examples

### Example #1
将 `#duration(2, 5, 55, 20)` 转换为文本值。
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
