---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


Bu tarihin ayın hangi haftası içinde olduğunu gösteren, 1 ile 6 arasındaki bir sayıyı döndürür.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

`dateTime` tarihinin ayın hangi haftası içinde olduğunu gösteren, 1 ile 6 arasındaki bir sayı döndürür.

-   `dateTime`: Ayın haftasının belirlendiği `datetime` değeri.


## Examples

### Example #1
15 Mart 2011'in yılın hangi haftasında olduğunu belirleyin.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
