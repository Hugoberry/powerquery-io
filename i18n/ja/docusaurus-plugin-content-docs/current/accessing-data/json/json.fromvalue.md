---
title: Json.FromValue
---

# Json.FromValue


指定された値の JSON 表現を生成します。


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

指定した値 `value` を、`encoding` で指定したテキスト コーディングに従って JSON 表記にします。`encoding` が省略された場合は UTF8 が使用されます。値は次のように表されます。

-   Null、テキスト、および論理値は対応する JSON 型として表されます。
-   数値は JSON 内の数値として表されますが、`#infinity`、`-#infinity`、および `#nan` は null に変換されます。
-   リストは JSON 配列として表されます
-   レコードは JSON オブジェクトとして表されます
-   テーブルはオブジェクトの配列として表されます
-   日付、時刻、日時、日時付きタイムゾーン、期間は ISO-8601 テキストとして表されます
-   バイナリ値は base-64 エンコードされたテキストとして表されます
-   型と関数はエラーとなります


## Examples

### Example #1
複合値を JSON に変換します。
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
