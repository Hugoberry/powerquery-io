---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Bu tarihin artık yıl içinde olup olmadığını belirtir.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

`dateTime` verilen datetime değerinin artık yıl içinde olup olmadığını gösterir.

-   `dateTime`: Değerlendirilecek `date`, `datetime` veya `datetimezone` değeri.


## Examples

### Example #1
`#date(2012, 01, 01)` ile temsil edilen 2012 yılının artık yıl olup olmadığını belirler.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
