---
title: Value.FromText
---

# Value.FromText


テキスト形式の表記から厳密に型指定された値を作成します。


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

テキスト形式の表記から値をデコードし、適切な型の値として解釈します。

-   `text`: 解釈するテキストです。
-   `culture`: (省略可能) テキストの解釈に使用される特定のカルチャ (例: "en-US") です。

この関数はテキスト値を受け取り、`数値`、`論理`、`null`、`日付/時刻`、`期間`、または`テキスト`型の値を返します。空のテキスト値は、`null` 値として解釈されます。


## Examples

### Example #1
数値を表すテキストを対応する数値に変換します。
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
パーセンテージを表すテキストを対応する数値に変換します。
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
フランスのユーロを表すテキストを対応する数値に変換します。
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
ドイツの日付と時間を表すテキストを対応する日付と時刻の値に変換します。
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
