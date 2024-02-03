---
title: Binary.FromText
---

# Binary.FromText


## Description

데이터를 텍스트에서 이진 값으로 디코딩합니다.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

텍스트 값 <code>text</code>을(를) 이진 값(<code>number</code> 목록)으로 변환한 결과를 반환합니다. <code>encoding</code>을(를) 지정하여 텍스트 값에 인코딩이 사용됨을 나타낼 수도 있습니다.      <code>encoding</code>에 사용할 수 있는 <code>BinaryEncoding</code> 값은 다음과 같습니다.      <ul>        <li><code>BinaryEncoding.Base64</code>: Base 64 인코딩</li>        <li><code>BinaryEncoding.Hex</code>: 16진수 인코딩</li>      </ul>


## Examples

### Example #1 
&#34;1011&#34;을 이진 값으로 디코딩합니다.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
16진수 인코딩을 사용하여 &#34;1011&#34;을 이진 값으로 디코딩합니다.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
