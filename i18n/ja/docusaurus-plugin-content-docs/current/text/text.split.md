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

指定された区切り記号に基づいてテキスト値を分割した結果のテキスト値のリストを返します。

-   `text`: 分割するテキスト値。
-   `separator`: テキストの分割に使用される区切り記号。区切り記号には、1 文字または一連の文字を指定できます。一連の文字が使用されている場合、テキストは正確な一連の文字が発生するインスタンスでのみ分割されます。


## Examples

### Example #1
"|" で区切られたテキスト値 "Name|Address|PhoneNumber" から一覧を作成します。
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


### Example #2
一連の文字を使用してテキスト値からリストを作成します。
```powerquery
Text.Split("Name, the Customer, the Purchase Date", ", the ")
```

Result: 
```powerquery
{
    "Name",
    "Customer",
    "Purchase Date"
}
```




## Category
Text.Transformations
