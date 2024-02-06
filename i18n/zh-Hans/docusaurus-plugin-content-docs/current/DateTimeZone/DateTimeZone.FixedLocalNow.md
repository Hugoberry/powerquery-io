---
title: DateTimeZone.FixedLocalNow
---

# DateTimeZone.FixedLocalNow


返回采用本地时区的当前日期和时间。该值是固定的，因此将不会随着连续调用而更改。


## Syntax

```powerquery
DateTimeZone.FixedLocalNow(

) as datetimezone
```


## Remarks

返回设置为系统上的当前日期和时间的 <code>datetime</code> 值。返回的值包含表示本地时区的时区信息。该值是固定的，因此将不会随着连续调用而更改，这与 DateTimeZone.LocalNow 不同，后者可能会在表达式的执行过程中返回不同值。



## Category
DateTimeZone
