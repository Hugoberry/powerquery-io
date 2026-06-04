---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


주의 요일 이름을 반환합니다.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Remarks

제공된 `date`에 대한 요일 이름을 반환합니다. 선택적 `culture`(예: "en-US")이(가) 제공될 수도 있습니다.


## Examples

### Example #1
주의 요일 이름을 가져옵니다.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
