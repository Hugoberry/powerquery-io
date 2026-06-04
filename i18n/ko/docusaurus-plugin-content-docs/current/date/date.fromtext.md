---
title: Date.FromText
---

# Date.FromText


로컬, 유니버설 및 사용자 지정 날짜 형식에서 날짜를 만듭니다.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

텍스트 표현에서 날짜 값을 만듭니다.

-   `text`: 날짜로 변환할 텍스트 값입니다.
-   `options`: 추가 속성을 지정하기 위해 제공될 수 있는 선택적 `record`입니다. `record`에는 다음 필드가 포함될 수 있습니다.
    -   `Format`: 사용할 형식을 나타내는 `text` 값입니다. 자세한 내용은 https://go.microsoft.com/fwlink/?linkid=2180104 https://go.microsoft.com/fwlink/?linkid=2180105. 이 필드를 생략하거나 `null` 제공하면 최상의 노력을 사용하여 날짜를 구문 분석합니다.
    -   `Culture`: `Format`이 null이 아닌 경우 `Culture`는 일부 형식 지정자를 제어합니다. 예를 들어 `"en-US"`에서 `"MMM"`은 `"Jan", "Feb", "Mar", ...`이지만 `"ru-RU"`에서 `"MMM"`은 `"янв", "фев", "мар", ...`입니다. `format`이 `null`이면 `Culture`는 사용할 기본 형식을 제어합니다. `Culture`가 `null`이거나 생략되면 `Culture.Current` 사용됩니다.

레거시 워크플로를 지원하기 위해, `options`은(는) 텍스트 값일 수도 있습니다. 이는 `options = [Format = null, Culture = options]`인 경우와 동작이 동일합니다.


## Examples

### Example #1
`"2010-12-31"`을 `date` 값으로 변환합니다.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2
사용자 지정 형식 및 독일어 문화권을 사용하여 변환합니다.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3
회교식 달력에서 1400의 시작 부분에 해당하는 양력의 날짜를 찾습니다.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```


### Example #4
게시된 날짜 열의 약식 월을 사용하여 이탈리아어 텍스트 날짜를 날짜 값으로 변환합니다.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = text, Sales = number],
    {
        {"US-2004", "20 gen. 2023", 580},
        {"CA-8843", "18 lug. 2024", 280},
        {"PA-1274", "12 gen. 2023", 90},
        {"PA-4323", "14 apr. 2023", 187},
        {"US-1200", "14 dic. 2023", 350},
        {"PTY-507", "4 giu. 2024", 110}
    }),
    #"Converted Date" = Table.TransformColumns(
        Source,
        {"Posted Date", each Date.FromText(_, [Culture = "it-IT"]), type date}
    )
in
    #"Converted Date"
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"US-2004", #date(2023, 1, 20), 580},
    {"CA-8843", #date(2024, 7, 18), 280},
    {"PA-1274", #date(2023, 1, 12), 90},
    {"PA-4323", #date(2023, 4, 14), 187},
    {"US-1200", #date(2023, 12, 14), 350},
    {"PTY-507", #date(2024, 6, 4), 110}
})
```




## Category
Date
