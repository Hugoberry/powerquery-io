---
title: Json.FromValue
---

# Json.FromValue


## Description

지정된 값의 JSON 표현을 생성합니다.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Details

<code>encoding</code>(으)로 지정된 텍스트 인코딩으로 지정한 값 <code>value</code>의 JSON 표현을 생성합니다. <code>encoding</code>이(가) 생략되면 UTF8이 사용됩니다. 값은 다음과 같이 나타납니다.<br /> <ul>        <li>Null, 텍스트 및 논리값은 해당 JSON 유형으로 나타납니다.</li>        <li>숫자는 <code>#infinity</code>, <code>-#infinity</code> 및 <code>#nan</code>이 null로 전환되는 경우를 제외하고 JSON의 숫자로 나타납니다.</li>        <li>목록은 JSON 배열로 나타납니다.</li>        <li>레코드는 JSON 개체로 나타납니다.</li>        <li>테이블은 개체의 배열로 나타납니다.</li>        <li>날짜, 시간, 날짜/시간, 날짜/시간 영역 및 기간은 ISO-8601 텍스트로 나타납니다.</li>        <li>이진값은 Base 64로 인코딩된 텍스트로 나타납니다.</li>        <li>유형 및 함수로 인해 오류가 발생합니다.</li> </ul>    


## Examples

### Example #1 
복합 값을 JSON으로 변환합니다.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
