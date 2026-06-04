---
title: Value.FromText
---

# Value.FromText


텍스트 표현에서 강력한 형식의 값을 만듭니다.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

텍스트 표현에서 값을 디코딩하고 적절한 형식의 값으로 해석합니다.

-   `text`: 해석할 텍스트입니다.
-   `culture`: (선택 사항) 텍스트를 해석하는 데 사용되는 특정 문화권입니다(예: "en-US").

이 함수는 텍스트 값을 받아 `숫자`, `논리`, `null`, `날짜/시간`, `기간`, 또는 `텍스트` 형식의 값을 반환합니다. 빈 텍스트 값은 `null` 값으로 해석됩니다.


## Examples

### Example #1
숫자를 나타내는 텍스트를 해당 숫자 값으로 변환합니다.
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
백분율을 나타내는 텍스트를 해당 숫자 값으로 변환합니다.
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
프랑스 유로 값을 나타내는 텍스트를 해당 숫자 값으로 변환합니다.
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
독일어 날짜와 시간을 나타내는 텍스트를 해당 날짜와 시간 값으로 변환합니다.
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
