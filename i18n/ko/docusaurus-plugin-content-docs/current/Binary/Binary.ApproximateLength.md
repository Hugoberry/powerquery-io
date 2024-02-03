---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


## Description

이진 파일의 대략적인 길이를 반환합니다.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Details

<code>binary</code>의 대략적인 길이를 반환하거나 데이터 소스가 대략적인 길이를 지원하지 않는 경우 오류를 반환합니다.


## Examples

### Example #1 
이진 값의 대략적인 길이를 가져옵니다.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
