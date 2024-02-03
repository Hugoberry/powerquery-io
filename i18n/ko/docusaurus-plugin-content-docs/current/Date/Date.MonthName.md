---
title: Date.MonthName
---

# Date.MonthName


## Description

월 이름 구성 요소를 반환합니다.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Details

제공된 <code>date</code>에 대한 월 구성 요소 이름을 반환합니다. 선택적 <code>culture</code>(예: "en-US")이(가) 제공될 수도 있습니다.


## Examples

### Example #1 
월 이름을 가져옵니다.
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
