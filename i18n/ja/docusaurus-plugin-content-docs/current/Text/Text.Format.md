---
title: Text.Format
---

# Text.Format


## Description

書式文字列および引数から書式付きテキストを返します。


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Details

一覧またはレコードから <code>arguments</code> を書式文字列 <code>formatString</code> に適用することによって作成された書式付きテキストを返します。省略可能な <code>culture</code> を指定することもできます (例: "en-US")。


## Examples

### Example #1 
数値のリストを書式設定します。
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
米国 (英語) のカルチャに基づいて、レコードをさまざまなデータ型に書式設定します。
```powerquery
Text.Format(
    "The time for the #[distance] km run held in #[city] on #[date] was #[duration].",
    [
        city = "Seattle",
        date = #date(2015, 3, 10),
        duration = #duration(0, 0, 54, 40),
        distance = 10
    ],
    "en-US"
)
```

Result: 
```powerquery
"The time for the 10 km run held in Seattle on 3/10/2015 was 00:54:40."
```




## Category
Text.Conversions from and to text
