---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


現地、世界共通、カスタムの datetimezone 形式から datetimezone を作成します。


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

テキスト形式の表記 `text` から `datetimezone` 値を作成します。省略可能な `record` パラメーター `options` を指定して、追加のプロパティを指定できます。`record` には、次のフィールドを含めることができます:

-   `Format`: 使用する形式を示す `text` 値。詳細については、https://go.microsoft.com/fwlink/?linkid=2180104 と https://go.microsoft.com/fwlink/?linkid=2180105 を参照してください。 このフィールドを省略するか、`null` を指定すると、ベスト エフォートで日付が解析されます。
-   `Culture`: `Format` が null 値でない場合、`Culture` が一部の書式指定子を制御します。たとえば、`"en-US"` では `"MMM"` は `"Jan", "Feb", "Mar", ...` ですが、`"ru-RU"` では `"MMM"` は `"янв", "фев", "мар", ...` です。`Format` が `null` の場合、`Culture` が使用する既定の形式を制御します。`Culture` が `null` または省略されている場合、`Culture.Current` が使用されます。

レガシ ワークフローをサポートするため、`options` をテキスト値にすることもできます。この場合、`options = [Format = null, Culture = options]` の場合と同じ動作になります。


## Examples

### Example #1
`"2010-12-31T01:30:00-08:00"` を `datetimezone` 値に変換します。
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2
カスタム形式とドイツ語のカルチャを使用して変換します。
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3
ISO 8601 を使用して変換します。
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
