---
title: Text.Split
---

# Text.Split


指定された区切り記号に基づいてテキストを一連のテキスト値に分割します。


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

指定された区切り記号 <code>separator</code> に基づいてテキスト値 <code>text</code> を分割した結果のテキスト値の一覧を返します。


## Examples

### Example #1 
&#34;|&#34; で区切られたテキスト値 &#34;Name|Address|PhoneNumber&#34; から一覧を作成します。
```powerquery
Text.Split("Name|Address|PhoneNumber", "|")
```

Result: 
```powerquery
{
    "Name",
    "Address",
    "PhoneNumber"
}
```




## Category
Text.Transformations
