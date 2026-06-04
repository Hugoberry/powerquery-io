---
title: Text.SplitAny
---

# Text.SplitAny


구문 기호에 있는 모든 문자를 기준으로 분할된 텍스트 값 목록을 반환합니다.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

구분 기호에 지정된 문자를 기준으로 텍스트 값을 분할하여 발생하는 텍스트 값 목록을 반환합니다.

-   `text`: 분할할 텍스트 값입니다.
-   `separators`: 텍스트를 분할하는 데 사용되는 구분 기호 문자입니다.


## Examples

### Example #1
지정된 구분 기호 문자를 사용하여 지정된 텍스트에서 목록을 만드세요.
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
