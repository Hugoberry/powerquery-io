---
title: Binary.FromText
---

# Binary.FromText


데이터를 텍스트에서 이진 값으로 디코딩합니다.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

텍스트 값 `text`을(를) 이진 값(`number` 목록)으로 변환한 결과를 반환합니다. `encoding`을(를) 지정하여 텍스트 값에 인코딩이 사용됨을 나타낼 수도 있습니다. `encoding`에 사용할 수 있는 `BinaryEncoding` 값은 다음과 같습니다.

-   `BinaryEncoding.Base64`: Base 64 인코딩
-   `BinaryEncoding.Hex`: 16진수 인코딩


## Examples

### Example #1
"1011"을 이진 값으로 디코딩합니다.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
16진수 인코딩을 사용하여 "1011"을 이진 값으로 디코딩합니다.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
