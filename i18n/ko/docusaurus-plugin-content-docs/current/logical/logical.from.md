---
title: Logical.From
---

# Logical.From


지정된 값에서 logical을 만듭니다.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

지정된 `value`에서 `logical` 값을 반환합니다. 지정된 `value`이(가) `null`이면 `Logical.From`은 `null`을 반환합니다. 지정된 `value`이(가) `logical`이면 `value`이(가) 반환됩니다. 다음 형식의 값을 `logical` 값으로 변환할 수 있습니다.

-   `text`: 텍스트 값(`“true”` 또는 `“false”`)에서 `logical` 값으로 변환할 수 있습니다. 자세한 내용은 `Logical.FromText`를 참조하세요.
-   `number`: `value`이(가) `0`과 같으면 `false`로 변환되고, 그렇지 않으면 `true`로 변환됩니다.

`value`이(가) 기타 형식이면 오류가 반환됩니다.


## Examples

### Example #1
`2`를 `logical` 값으로 변환합니다.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
