---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


로컬, 유니버설 및 사용자 지정 datetimezone 형식에서 datetimezone을 만듭니다.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

텍스트 표현 `text`의 `datetimezone` 값을 만듭니다. 추가 속성을 지정하기 위해 선택적 `record` 매개 변수 `options`이(가) 제공될 수 있습니다. `record`에는 다음 필드가 포함될 수 있습니다.

-   `Format`: 사용할 형식을 나타내는 `text` 값입니다. 자세한 내용은 https://go.microsoft.com/fwlink/?linkid=2180104 및 https://go.microsoft.com/fwlink/?linkid=2180105를 참조하세요. 이 필드를 생략하거나 `null`을 제공하면 최선을 다해 시간을 구문 분석하게 됩니다.
-   `Culture`: `Format`이 null이 아니면 `Culture`가 일부 형식 지정자를 제어합니다. 예를 들어 `"en-US"`에서 `"MMM"`은 `"Jan", "Feb", "Mar", ...`이지만 `"ru-RU"`에서 `"MMM"`은 `"янв", "фев", "мар", ...`입니다. `format`이 `null`이면 `Culture`는 사용할 기본 형식을 제어합니다. `Culture`가 `null`이거나 생략된 경우, `Culture.Current`가 사용됩니다.

레거시 워크플로를 지원하기 위해, `options`은(는) 텍스트 값일 수도 있습니다. 이는 `options = [Format = null, Culture = options]`인 경우와 동작이 동일합니다.


## Examples

### Example #1
`"2010-12-31T01:30:00-08:00"`을 `datetimezone` 값으로 변환합니다.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2
사용자 지정 형식 및 독일어 문화권을 사용하여 변환합니다.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3
ISO 8601을 사용하여 변환합니다.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
