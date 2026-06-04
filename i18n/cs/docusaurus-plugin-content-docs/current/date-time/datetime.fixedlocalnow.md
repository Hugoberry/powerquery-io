---
title: DateTime.FixedLocalNow
---

# DateTime.FixedLocalNow


Vrátí aktuální datum a čas v místním časovém pásmu. Tato hodnota je pevná a při následných voláních se nezmění.


## Syntax

```powerquery
DateTime.FixedLocalNow(

) as datetime
```


## Remarks

Vrací hodnotu `datetime` nastavenou na aktuální datum a čas v systému. Tato hodnota je pevná a při následných voláních se nezmění – na rozdíl od funkce DateTime.LocalNow, která během provádění výrazu může vracet různé hodnoty.



## Category
DateTime
