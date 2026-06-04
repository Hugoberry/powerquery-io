---
title: Text.Split
---

# Text.Split


지정된 구분 기호를 사용하여 텍스트를 텍스트 값 목록으로 분할합니다.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

지정된 구분 기호를 기준으로 텍스트 값을 분할하여 발생하는 텍스트 값 목록을 반환합니다.

-   `text`: 분할할 텍스트 값입니다.
-   `separator`: 텍스트를 분할하는 데 사용되는 구분 기호입니다. 구분 기호는 단일 문자 또는 문자 시퀀스일 수 있습니다. 문자 시퀀스를 사용하는 경우 텍스트는 정확한 시퀀스가 발생하는 인스턴스에서만 분할됩니다.


## Examples

### Example #1
텍스트 값 "Name|Address|PhoneNumber"를 "|"로 구분하여 목록을 만듭니다.
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
문자 시퀀스를 사용하여 텍스트 값에서 목록을 만드세요.
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
