---
title: DateTimeZone.FixedLocalNow
---

# DateTimeZone.FixedLocalNow


## Description

Vrátí aktuální datum a čas v místním časovém pásmu. Tato hodnota je pevná a při následných voláních se nezmění.


## Syntax

```powerquery
DateTimeZone.FixedLocalNow(

) as datetimezone
```


## Details

Vrací hodnotu <code>datetime</code> nastavenou na aktuální datum a čas v systému. Vrácená hodnota obsahuje údaj o časovém pásmu, který představuje místní časové pásmo. Tato hodnota je pevná a při následných voláních se nezmění – na rozdíl od funkce DateTimeZone.LocalNow, která během provádění výrazu může vracet různé hodnoty.



## Category
DateTimeZone
