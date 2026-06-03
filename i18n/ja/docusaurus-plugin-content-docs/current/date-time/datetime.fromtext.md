---
title: DateTime.FromText
---

# DateTime.FromText


現地時間の形式と協定世界時の形式から datetimezone を作成します。


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

テキスト形式の表記 `text` から `datetime` 値を作成します。省略可能な `record` パラメーター `options` を指定して、追加のプロパティを指定できます。`record` には、次のフィールドを含めることができます:

-   `Format`: 使用する形式を示す `text` 値。詳細については、https://go.microsoft.com/fwlink/?linkid=2180104 と https://go.microsoft.com/fwlink/?linkid=2180105 を参照してください。 このフィールドを省略するか、`null` を指定すると、ベスト エフォートで日付が解析されます。
-   `Culture`: `Format` が null 値でない場合、`Culture` が一部の書式指定子を制御します。たとえば、`"en-US"` では `"MMM"` は `"Jan", "Feb", "Mar", ...` ですが、`"ru-RU"` では `"MMM"` は `"янв", "фев", "мар", ...` です。`Format` が `null` の場合、`Culture` が使用する既定の形式を制御します。`Culture` が `null` または省略されている場合、`Culture.Current` が使用されます。

レガシ ワークフローをサポートするため、`options` をテキスト値にすることもできます。この場合、`options = [Format = null, Culture = options]` の場合と同じ動作になります。


## Examples

### Example #1
`"2010-12-31T01:30:00"` を datetime 値に変換します。
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2
`"2010-12-31T01:30:00.121212"` を datetime 値に変換します。
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3
`"2010-12-31T01:30:00"` を datetime 値に変換します。
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4
`"20101231T013000"` を datetime 値に変換します。
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
