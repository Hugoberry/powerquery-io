---
title: Duration.FromText
---

# Duration.FromText


テキスト表記の経過時間形式 (d.h:m:s) から期間値を返します。


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

指定されたテキスト `text` から duration 値を返します。この関数では、以下の形式を解析できます:

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(範囲はどれも両端を含みます)

-   ddd: 日数。
-   hh: 0 から 23 までの時間を表す数字。
-   mm: 0 から 59 までの分を表す数字。
-   ss: 0 から 59 までの秒を表す数字。
-   ff: 0 から 9999999 までの秒の少数部分を表す数字。


## Examples

### Example #1
`"2.05:55:20"` を `duration` 値に変換します。
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
