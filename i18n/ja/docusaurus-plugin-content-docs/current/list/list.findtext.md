---
title: List.FindText
---

# List.FindText


指定されたテキストを含む (レコード フィールドを含む) 値のリストを返します。


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

リスト `list` から、値 `text` が含まれる値のリストを返します。


## Examples

### Example #1
リスト \{"a", "b", "ab"\} 内の、"a" に一致するテキスト値を求めます。
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
