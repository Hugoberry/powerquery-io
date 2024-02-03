---
title: DateTime.FixedLocalNow
---

# DateTime.FixedLocalNow


## Description

Vrátí aktuální datum a čas v místním časovém pásmu. Tato hodnota je pevná a při následných voláních se nezmění.


## Syntax

```powerquery
DateTime.FixedLocalNow(

) as datetime
```


## Details

Vrací hodnotu <code>datetime</code> nastavenou na aktuální datum a čas v systému. Tato hodnota je pevná a při následných voláních se nezmění – na rozdíl od funkce DateTime.LocalNow, která během provádění výrazu může vracet různé hodnoty.



## Category
DateTime
