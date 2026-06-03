---
title: Time.ToText
---

# Time.ToText


時刻値のテキスト形式の表記を返します。


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

`time` のテキスト形式の表記を返します。省略可能な `record` パラメーター `options` を指定して、追加のプロパティを指定できます。`culture` は、レガシ ワークフローでのみ使用されます。`record` には、次のフィールドを含めることができます:

-   `Format`: 使用する形式を示す `text` 値。詳細については、https://go.microsoft.com/fwlink/?linkid=2180104 と https://go.microsoft.com/fwlink/?linkid=2180105 を参照してください。このフィールドを省略するか、`null` を指定すると、`Culture` によって定義された既定値を使用して日付の形式が設定されます。
-   `Culture`: `Format` が null 値でない場合、`Culture` が一部の書式指定子を制御します。たとえば、`"en-US"` では、`"tt"` は `"AM" or "PM"`ですが、`"ar-EG"` では `"tt"` は `"ص" or "م"` です。`Format` が `null` の場合、`Culture` が使用する既定の形式を制御します。`Culture` が `null` または省略されている場合、`Culture.Current` が使用されます。

レガシ ワークフローをサポートするため、`options` と `culture` をテキスト値にすることもできます。この場合、`options = [Format = options, Culture = culture]` の場合と同じ動作になります。


## Examples

### Example #1
`#time(01, 30, 25)` を `text` 値に変換します。*結果出力が現在のカルチャに応じて異なる場合があります。*
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2
カスタム形式とドイツ語のカルチャを使用して変換します。
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3
標準時間形式を使用して変換します。
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
