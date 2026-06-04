---
title: Text.InferNumberType
---

# Text.InferNumberType


텍스트로 인코딩된 숫자의 세분화된 숫자 형식(Int64.Type, Double.Type 등)을 유추합니다.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

`text`의 세부적인 숫자 형식(Int64.Type, Double.Type 등)을 유추합니다. `text`이(가) 숫자가 아닌 경우 오류가 발생합니다. 선택적 `culture`(예: "en-US")이(가) 제공될 수도 있습니다.



## Category
Text
