---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


## Description

주의 요일 이름을 반환합니다.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Details

제공된 <code>date</code>에 대한 요일 이름을 반환합니다. 선택적 <code>culture</code>(예: "en-US")이(가) 제공될 수도 있습니다.


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
