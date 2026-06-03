---
title: Text.Combine
---

# Text.Combine


一連のテキスト値を 1 つのテキスト値に連結します。


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

テキスト値のリスト (`texts`) を 1 つのテキスト値に結合した結果を返します。`texts` の中に `null` 値がある場合、それらはすべて無視されます。 最終的な結合テキスト内で使用する `separator` を指定できます (省略可能)。


## Examples

### Example #1
テキスト値 "Seattle" と "WA" を結合します。
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
テキスト値 "Seattle" と "WA" をコンマとスペースで区切って結合します。
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
値 "Seattle"、`null`、"WA" の値をコンマとスペースで区切って結合します (`null` は無視されることに注意してください)。
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
名、ミドル ネームのイニシャル (ある場合)、姓を個人のフル ネームに組み合わせます。
```powerquery
let
    Source = Table.FromRecords({
        [First Name = "Doug", Middle Initial = "J", Last Name = "Elis"],
        [First Name = "Anna", Middle Initial = "M", Last Name = "Jorayew"],
        [First Name = "Rada", Middle Initial = null, Last Name = "Mihaylova"]
    }),
    FullName = Table.AddColumn(Source, "Full Name", each Text.Combine({[First Name], [Middle Initial], [Last Name]}, " "))
in
    FullName
```

Result: 
```powerquery
Table.FromRecords({
    [First Name = "Doug", Middle Initial = "J", Last Name = "Elis", Full Name = "Doug J Elis"],
    [First Name = "Anna", Middle Initial = "M", Last Name = "Jorayew", Full Name = "Anna M Jorayew"],
    [First Name = "Rada", Middle Initial = null, Last Name = "Mihaylova", Full Name = "Rada Mihaylova"]
})
```




## Category
Text.Transformations
