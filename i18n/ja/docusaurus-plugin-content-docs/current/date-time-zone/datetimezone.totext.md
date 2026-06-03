---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


datetimezone 値のテキスト形式の表記を返します。


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

`dateTimeZone` のテキスト形式の表記を返します。省略可能な `record` パラメーター `options` を指定して、追加のプロパティを指定できます。`culture` は、レガシ ワークフローでのみ使用されます。`record` には、次のフィールドを含めることができます:

-   `Format`: 使用する形式を示す `text` 値。詳細については、https://go.microsoft.com/fwlink/?linkid=2180104 と https://go.microsoft.com/fwlink/?linkid=2180105 を参照してください。このフィールドを省略するか、`null` を指定すると、`Culture` によって定義された既定値を使用して日付の形式が設定されます。
-   `Culture`: `Format` が null 値でない場合、`Culture` が一部の書式指定子を制御します。たとえば、`"en-US"` では `"MMM"` は `"Jan", "Feb", "Mar", ...` ですが、`"ru-RU"` では `"MMM"` は `"янв", "фев", "мар", ...` です。`Format` が `null` の場合、`Culture` が使用する既定の形式を制御します。`Culture` が `null` または省略されている場合、`Culture.Current` が使用されます。

レガシ ワークフローをサポートするため、`options` と `culture` をテキスト値にすることもできます。この場合、`options = [Format = options, Culture = culture]` の場合と同じ動作になります。


## Examples

### Example #1
`#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)` を `text` 値に変換します。*結果出力が現在のカルチャに応じて異なる場合があります。*
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2
カスタム形式とドイツ語のカルチャを使用して変換します。
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3
ISO 8601 のパターンを使用して変換します。
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
