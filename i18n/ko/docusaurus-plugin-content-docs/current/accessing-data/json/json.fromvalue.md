---
title: Json.FromValue
---

# Json.FromValue


지정된 값의 JSON 표현을 생성합니다.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

`encoding`(으)로 지정된 텍스트 인코딩으로 지정된 값 `value`의 JSON 표현을 생성합니다. `encoding`이(가) 생략되면 UTF8이 사용됩니다. 값은 다음과 같이 표시됩니다.

-   Null, 텍스트 및 논리값은 해당 JSON 유형으로 표시됩니다.
-   숫자는 `#infinity`, `-#infinity` 및 `#nan`이 null로 변환되는 경우를 제외하고 JSON의 숫자로 표시됩니다.
-   목록은 JSON 배열로 표시됩니다.
-   레코드는 JSON 개체로 표시됩니다.
-   테이블은 개체의 배열로 표시됩니다.
-   날짜, 시간, 날짜/시간, datetimezone 및 기간은 ISO-8601 텍스트로 표시됩니다.
-   이진값은 base-64로 인코딩된 텍스트로 표시됩니다.
-   유형과 함수에서 오류가 발생합니다.


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
