---
title: Guid.From
---

# Guid.From


지정된 값에서 GUID 값을 반환합니다.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Remarks

지정된 `value`에서 `Guid.Type` 값을 반환합니다. 지정된 `value`이(가) `null`이면 `Guid.From`이 `null`을 반환합니다. 지정된 `value`이(가) 허용되는 형식인지 확인하기 위한 검사가 수행됩니다. 허용되는 형식은 예제에 나와 있습니다.


## Examples

### Example #1
GUID는 32자리 연속 16진수로 제공할 수 있습니다.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2
GUID는 하이픈을 사용하여 8-4-4-4-12 블록으로 구분된 32자리 16진수로 제공할 수 있습니다.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3
GUID는 하이픈으로 구분하고 대괄호로 묶은 32자리 16진수로 제공할 수 있습니다.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4
GUID는 하이픈으로 구분하고 괄호로 묶은 32자리 16진수로 제공할 수 있습니다.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
