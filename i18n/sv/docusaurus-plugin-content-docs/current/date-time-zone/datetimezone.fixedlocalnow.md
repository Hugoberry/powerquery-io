---
title: DateTimeZone.FixedLocalNow
---

# DateTimeZone.FixedLocalNow


Returnerar aktuellt datum och tid i den lokala tidszonen. Det här värdet är fast och ändras inte i samband med efterföljande anrop.


## Syntax

```powerquery
DateTimeZone.FixedLocalNow(

) as datetimezone
```


## Remarks

Returnerar ett <code>datetime</code>-värde för systemets aktuella datum och tid. Värdet som returneras innehåller information om tidszonen som representerar den lokala tidszonen. Det här värdet är fast och ändras inte i samband med efterföljande anrop, till skillnad mot DateTimeZone.LocalNow, som kan returnera olika värden när ett uttryck körs.



## Category
DateTimeZone
