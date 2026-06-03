---
title: Value.FromText
---

# Value.FromText


从文本表示形式创建强类型的值。


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

根据文本表示形式解码值，并将其解释为具有适当类型的值。

-   `text`: 要解释的文本。
-   `culture`: (可选)用于解释文本的特定区域性(例如，”en-US”)。

此函数接受文本值，并返回类型为`number`、`logical`、`null`、`datetime`、`duration`或 `text` 的值。空文本值解释为 `null` 值。


## Examples

### Example #1
将表示数字的文本转换为相应的数字值。
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
将表示百分比的文本转换为相应的数字值。
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
将表示法语欧元值的文本转换为相应的数字值。
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
将表示德国日期和时间的文本转换为相应的日期和时间值。
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
