---
title: Duration.ToText
---

# Duration.ToText


"d.h:m:s" という形式のテキストを返します。


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

特定の期間の値 `duration` を "day.hour:mins:sec" 形式のテキスト表現で返します。

-   `duration`: テキスト表現の計算元の `duration`。
-   `format`: *(オプション)* 非推奨です。null でない場合はエラーが発生します。


## Examples

### Example #1
`#duration(2, 5, 55, 20)` をテキスト値に変換します。
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
