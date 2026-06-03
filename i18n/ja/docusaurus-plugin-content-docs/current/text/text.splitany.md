---
title: Text.SplitAny
---

# Text.SplitAny


区切り記号のいずれかの文字で分割されたテキスト値の一覧を返します。


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

区切り記号に指定された任意の文字に基づいてテキスト値を分割した結果のテキスト値のリストを返します。

-   `text`: 分割するテキスト値。
-   `separators`: テキストの分割に使用される区切り文字。


## Examples

### Example #1
指定された区切り文字を使用して、指定されたテキストからリストを作成します。
```powerquery
Text.SplitAny("Name|Customer ID|Purchase|Month-Day-Year", "|-")
```

Result: 
```powerquery
{
    "Name",
    "Customer ID",
    "Purchase",
    "Month",
    "Day",
    "Year"
}
```




## Category
Text.Transformations
