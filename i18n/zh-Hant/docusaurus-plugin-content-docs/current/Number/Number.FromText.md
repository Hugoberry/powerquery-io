---
title: Number.FromText
---

# Number.FromText


根據通用文字格式 ("15"、"3,423.10"、"5.0E-10") 建立數字。


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

從指定的文字值 `text` 傳回 `number` 值。

-   `text`: 數值的文字表示法。表示法必須採用通用數字格式，例如 "15"、"3,423.10" 或 "5.0E-10"。
-   `culture`: 控制如何解譯 `text` 的選用文化特性 (Culture) (例如 "zh-TW")。


## Examples

### Example #1
取得 `"4"` 的數值。
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
取得 `"5.0e-10"` 的數值。
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
