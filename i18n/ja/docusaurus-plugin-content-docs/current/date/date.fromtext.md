---
title: Date.FromText
---

# Date.FromText


現地、世界共通、カスタムの日付の形式から日付を作成します。


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

テキスト形式の表記から日付値を作成します。

-   `text`: 日付に変換するテキスト値。
-   `options`: 追加のプロパティを指定するために指定できる省略可能な `record`。`record` には、次のフィールドを含めることができます:
    -   `Format`: 使用する形式を示す `text` 値。詳細については、https://go.microsoft.com/fwlink/?linkid=2180104 と https://go.microsoft.com/fwlink/?linkid=2180105 を参照してください。このフィールドを省略するか、`null` を指定すると、ベスト エフォートで日付が解析されます。
    -   `Culture`: `Format` が null 値でない場合、`Culture` が一部の書式指定子を制御します。たとえば、`"en-US"` では `"MMM"` は `"Jan", "Feb", "Mar", ...` ですが、`"ru-RU"` では `"MMM"` は `"янв", "фев", "мар", ...` です。`Format` が `null` の場合、`Culture` が使用する既定の形式を制御します。`Culture` が `null` または省略されている場合、`Culture.Current` が使用されます。

レガシ ワークフローをサポートするため、`options` をテキスト値にすることもできます。この場合、`options = [Format = null, Culture = options]` の場合と同じ動作になります。


## Examples

### Example #1
`"2010-12-31"` を `date` 値に変換します。
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2
カスタム形式とドイツ語のカルチャを使用して変換します。
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3
イスラム暦の 1400 年の開始に対応するグレゴリオ暦の日付を探します。
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```


### Example #4
\[投稿日\] 列の略称の月を含むイタリア語のテキストの日付を日付値に変換します。
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = text, Sales = number],
    {
        {"US-2004", "20 gen. 2023", 580},
        {"CA-8843", "18 lug. 2024", 280},
        {"PA-1274", "12 gen. 2023", 90},
        {"PA-4323", "14 apr. 2023", 187},
        {"US-1200", "14 dic. 2023", 350},
        {"PTY-507", "4 giu. 2024", 110}
    }),
    #"Converted Date" = Table.TransformColumns(
        Source,
        {"Posted Date", each Date.FromText(_, [Culture = "it-IT"]), type date}
    )
in
    #"Converted Date"
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"US-2004", #date(2023, 1, 20), 580},
    {"CA-8843", #date(2024, 7, 18), 280},
    {"PA-1274", #date(2023, 1, 12), 90},
    {"PA-4323", #date(2023, 4, 14), 187},
    {"US-1200", #date(2023, 12, 14), 350},
    {"PTY-507", #date(2024, 6, 4), 110}
})
```




## Category
Date
