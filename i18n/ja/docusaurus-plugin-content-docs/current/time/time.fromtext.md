---
title: Time.FromText
---

# Time.FromText


現地、世界共通、カスタムの時刻の形式から時刻を作成します。


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

テキスト形式の表記 `text` から `time` 値を作成します。省略可能な `record` パラメーター `options` を指定して、追加のプロパティを指定できます。`record` には、次のフィールドを含めることができます:

-   `Format`: 使用する形式を示す `text` 値。詳細については、https://go.microsoft.com/fwlink/?linkid=2180104 と https://go.microsoft.com/fwlink/?linkid=2180105 を参照してください。 このフィールドを省略するか、`null` を指定すると、ベスト エフォートで時刻が解析されます。
-   `Culture`: `Format` が null 値でない場合、`Culture` が一部の書式指定子を制御します。たとえば、`"en-US"` では、`"tt"` は `"AM" or "PM"`ですが、`"ar-EG"` では `"tt"` は `"ص" or "م"` です。`Format` が `null` の場合、`Culture` が使用する既定の形式を制御します。`Culture` が `null` または省略されている場合、`Culture.Current` が使用されます。

レガシ ワークフローをサポートするため、`options` をテキスト値にすることもできます。この場合、`options = [Format = null, Culture = options]` の場合と同じ動作になります。


## Examples

### Example #1
`"10:12:31am"` を時刻値に変換します。
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
`"1012"` を Time 値に変換します。
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
`"10"` を Time 値に変換します。
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
