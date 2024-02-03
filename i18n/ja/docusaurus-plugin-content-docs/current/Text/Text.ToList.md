---
title: Text.ToList
---

# Text.ToList


## Description

指定されたテキスト値から文字の値の一覧を返します。


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Details

指定されたテキスト値 <code>text</code> から文字の値の一覧を返します。


## Examples

### Example #1 
テキスト &#34;Hello World&#34; から文字の値の一覧を作成します。
```powerquery
Text.ToList("Hello World")
```

Result: 
```powerquery
{
    "H",
    "e",
    "l",
    "l",
    "o",
    " ",
    "W",
    "o",
    "r",
    "l",
    "d"
}
```




## Category
Text.Conversions from and to text
