---
title: DateTime.FixedLocalNow
---

# DateTime.FixedLocalNow


Returns the current date and time in the local timezone. This value is fixed and will not change with successive calls.


## Syntax

```powerquery
DateTime.FixedLocalNow(

) as datetime
```


## Remarks

Returns a <code>datetime</code> value set to the current date and time on the system. This value is fixed and will not change with successive calls, unlike DateTime.LocalNow, which may return different values over the course of execution of an expression.



## Category
DateTime
