---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


datetimezone 값의 텍스트 표현을 반환합니다.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

`dateTimeZone`의 텍스트 표현을 반환합니다. 추가 속성을 지정하기 위해 선택적 `record` 매개 변수 `options`이(가) 제공될 수 있습니다. `culture`은(는) 레거시 워크플로에만 사용됩니다. `record`에는 다음 필드가 포함될 수 있습니다.

-   `Format`: 사용할 형식을 나타내는 `text` 값입니다. 자세한 내용은 https://go.microsoft.com/fwlink/?linkid=2180104 및 https://go.microsoft.com/fwlink/?linkid=2180105를 참조하세요. 이 필드를 생략하거나 `null`을 제공하면 `Culture`에서 정의한 기본값을 사용하여 날짜 형식이 지정됩니다.
-   `Culture`: `Format`이 null이 아니면 `Culture`가 일부 형식 지정자를 제어합니다. 예를 들어 `"en-US"`에서 `"MMM"`은 `"Jan", "Feb", "Mar", ...`이지만 `"ru-RU"`에서 `"MMM"`은 `"янв", "фев", "мар", ...`입니다. `format`이 `null`이면 `Culture`는 사용할 기본 형식을 제어합니다. `Culture`가 `null`이거나 생략된 경우, `Culture.Current`가 사용됩니다.

레거시 워크플로를 지원하기 위해, `options` 및 `culture`은(는) 텍스트 값일 수도 있습니다. 이는 `options = [Format = options, Culture = culture]`인 경우와 동작이 동일합니다.


## Examples

### Example #1
`#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)`을 `text` 값으로 변환합니다. *결과 출력은 현재 문화권에 따라 다를 수 있습니다.*
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2
사용자 지정 형식 및 독일어 문화권을 사용하여 변환합니다.
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3
ISO 8601 패턴을 사용하여 변환합니다.
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
