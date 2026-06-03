---
title: Number.FromText
---

# Number.FromText


一般的なテキスト形式 ("15"、"3,423.10"、"5.0E-10") から数値を作成します。


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

指定されたテキスト値 `text` から `number` 値を返します。

-   `text`: 数値のテキスト形式の表記。この表記は、一般的な数値形式 ("15"、"3,423.10"、"5.0E-10" など) である必要があります。
-   `culture`: `text` を解釈する方法を制御する省略可能なカルチャ (例: "en-US")。


## Examples

### Example #1
`"4"` の数値を取得します。
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
`"5.0e-10"` の数値を取得します。
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
