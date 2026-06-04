---
title: Binary.From
---

# Binary.From


지정된 값에서 binary를 만듭니다.


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

지정된 `value`에서 `binary` 값을 반환합니다. 지정된 `value`이(가) `null`이면 `Binary.From`은 `null`을 반환합니다. 지정된 `value`이(가) `binary`이면 `value`이(가) 반환됩니다. 다음 형식의 값을 `binary` 값으로 변환할 수 있습니다.

-   `text`: 텍스트 표현에서 `binary` 값으로 변환할 수 있습니다. 자세한 내용은 `Binary.FromText`를 참조하세요.

`value`이(가) 기타 형식이면 오류가 반환됩니다.


## Examples

### Example #1
`"1011"`의 `binary` 값을 가져옵니다.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
