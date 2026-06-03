---
title: Number.FromText
---

# Number.FromText


从通用文本格式("15", "3,423.10", "5.0E-10")创建数。


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

从给定的文本值 `text` 返回 `number` 值。

-   `text`: 数值的文本表示形式。表示形式必须采用通用数字格式，例如 "15"、"3,423.10" 或 "5.0E-10"。
-   `culture`: 控制 `text` 的解释方式的可选区域性(例如 "en-US")。


## Examples

### Example #1
获取 `"4"` 的数值。
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
获取 `"5.0e-10"` 的数值。
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
