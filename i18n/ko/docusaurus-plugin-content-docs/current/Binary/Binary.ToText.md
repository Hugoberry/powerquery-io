---
title: Binary.ToText
---

# Binary.ToText


## Description

이진 데이터를 텍스트 형식으로 인코딩합니다.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Details

숫자의 이진 목록 <code>binary</code>을(를) 텍스트 값으로 변환한 결과를 반환합니다. 선택적으로 <code>encoding</code>을(를) 지정하여 생성된 텍스트 값에 인코딩이 사용됨을 나타낼 수도 있습니다.      <code>encoding</code>에 사용할 수 있는 <code>BinaryEncoding</code> 값은 다음과 같습니다.      <ul>        <li><code>BinaryEncoding.Base64</code>: Base 64 인코딩</li>        <li><code>BinaryEncoding.Hex</code>: 16진수 인코딩</li>      </ul>



## Category
Binary
