---
title: Duration.ToText
---

# Duration.ToText


傳回 "d.h:m:s" 格式的文字。


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

傳回指定持續時間值 `duration` 的文字表示法，格式為 "day.hour:mins:sec"。

-   `duration`: `duration`，透過它計算文字表示法。
-   `format`: *(選用)* 已淘汰，如果不是 Null，將會引發錯誤。


## Examples

### Example #1
將 `#duration(2, 5, 55, 20)` 轉換成文字值。
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
