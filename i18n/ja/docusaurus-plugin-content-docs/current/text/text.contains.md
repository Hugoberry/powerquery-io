---
title: Text.Contains
---

# Text.Contains


テキストにサブストリングが含まれているかどうかを示す値を返します。


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

`text` に値 `substring` が含まれているかどうかを検出します。値が見つかった場合は true を返します。この関数では、ワイルドカードや正規表現はサポートされていません。  
  
省略可能な引数 `comparer` を使用して、大文字と小文字を区別しない、またはカルチャとロケールに対応した比較を指定できます。 数式言語では、次の組み込みの比較子を使用できます:

-   `Comparer.Ordinal`: 大文字と小文字を区別する序数比較を実行するために使用されます
-   `Comparer.OrdinalIgnoreCase`: 大文字と小文字を区別しない序数比較を実行するために使用されます
-   `Comparer.FromCulture`: カルチャに対応した比較を実行するために使用されます

最初の引数が null 値の場合、この関数は null 値を返します。  
  
すべての文字は文字通りに扱われます。たとえば、"DR"、" DR"、"DR "、" DR " は互いに等しいとは見なされません。


## Examples

### Example #1
テキスト "Hello World" に "Hello" が含まれているかどうかを調べます。
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
テキスト "Hello World" に "hello" が含まれているかどうかを調べます。
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
テキスト "Hello World "に "hello "が含まれているかどうかを、大文字小文字を区別しない比較関数を使用して検索します。
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
アカウント コードに "A-" または "7" が含まれるテーブル内の行を検索します。
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = date, Sales = number],
    {
        {"US-2004", #date(2023,1,20), 580},
        {"CA-8843", #date(2023,7,18), 280},
        {"PA-1274", #date(2022,1,12), 90},
        {"PA-4323", #date(2023,4,14), 187},
        {"US-1200", #date(2022,12,14), 350},
        {"PTY-507", #date(2023,6,4), 110}
    }),
    #"Filtered rows" = Table.SelectRows(
        Source,
        each Text.Contains([Account Code], "A-") or
            Text.Contains([Account Code], "7"))
in
    #"Filtered rows"
    
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"CA-8843", #date(2023,7,18), 280},
    {"PA-1274", #date(2022,1,12), 90},
    {"PA-4323", #date(2023,4,14), 187},
    {"PTY-507", #date(2023,6,4), 110}
})
    
```




## Category
Text.Membership
