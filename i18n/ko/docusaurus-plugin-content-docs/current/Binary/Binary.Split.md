---
title: Binary.Split
---

# Binary.Split


## Description

지정한 페이지 크기를 사용하여 지정한 이진 값을 이진 값 목록으로 분할합니다.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Details

<code>binary</code>을(를) 이진 값 목록으로 분할합니다. 이때 출력 목록의 첫 번째 요소는 원본 이진 값의 첫 <code>pageSize</code>바이트를 포함하는 이진 값이고    출력 목록의 다음 요소는 원본 이진 값의 다음 <code>pageSize</code>바이트를 포함하는 이진 값이며, 같은 방식으로 이어집니다.



## Category
Binary
