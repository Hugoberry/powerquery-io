---
title: Number.FromText
---

# Number.FromText


일반 텍스트 형식("15", "3,423.10", "5.0E-10")에서 number를 만듭니다.


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

지정된 텍스트 값 `text`에서 `number` 값을 반환합니다.

-   `text`: number 값의 텍스트 표현입니다. 이 표현은 일반 number 형식(예: "15", "3,423.10" 또는 "5.0E-10")이어야 합니다.
-   `culture`: `text`이(가) 해석되는 선택적 문화권(예: "en-US")입니다.


## Examples

### Example #1
`"4"`의 number 값을 가져옵니다.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
`"5.0e-10"`의 number 값을 가져옵니다.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
