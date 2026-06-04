---
title: Date.ToText
---

# Date.ToText


date 값의 텍스트 표현을 반환합니다.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

`date`의 텍스트 표현을 반환합니다. 추가 속성을 지정하기 위해 선택적 `record` 매개 변수 `options`이(가) 제공될 수 있습니다. `culture`은(는) 레거시 워크플로에만 사용됩니다. `record`에는 다음 필드가 포함될 수 있습니다.

-   `Format`: 사용할 형식을 나타내는 `text` 값입니다. 자세한 내용은 https://go.microsoft.com/fwlink/?linkid=2180104 및 https://go.microsoft.com/fwlink/?linkid=2180105를 참조하세요. 이 필드를 생략하거나 `null`을 제공하면 `Culture`에서 정의한 기본값을 사용하여 날짜 형식이 지정됩니다.
-   `Culture`: `Format`이 null이 아니면 `Culture`가 일부 형식 지정자를 제어합니다. 예를 들어 `"en-US"`에서 `"MMM"`은 `"Jan", "Feb", "Mar", ...`이지만 `"ru-RU"`에서 `"MMM"`은 `"янв", "фев", "мар", ...`입니다. `format`이 `null`이면 `Culture`는 사용할 기본 형식을 제어합니다. `Culture`가 `null`이거나 생략된 경우, `Culture.Current`가 사용됩니다.

레거시 워크플로를 지원하기 위해, `options` 및 `culture`은(는) 텍스트 값일 수도 있습니다. 이는 `options = [Format = options, Culture = culture]`인 경우와 동작이 동일합니다.


## Examples

### Example #1
`#date(2010, 12, 31)`을 `text` 값으로 변환합니다. *결과 출력은 현재 문화권에 따라 다를 수 있습니다.*
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2
사용자 지정 형식 및 독일어 문화권을 사용하여 변환합니다.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3
양력에서 2000년 1월 1일에 해당하는 회교실 달력의 연도를 찾습니다.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
