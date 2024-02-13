---
title: DateTimeZone.FixedLocalNow
---

# DateTimeZone.FixedLocalNow


Returns the current date &amp; time in the local timezone. This value is fixed and will not change with successive calls.


## Syntax

```powerquery
DateTimeZone.FixedLocalNow(

) as datetimezone
```


## Remarks

Returns a <code>datetime</code> value set to the current date and time on the system. The returned value contains timezone information representing the local timezone. This value is fixed and will not change with successive calls, unlike DateTimeZone.LocalNow, which may return different values over the course of execution of an expression.



## Category
DateTimeZone
