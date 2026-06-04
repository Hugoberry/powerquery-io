---
title: DateTime.FixedLocalNow
---

# DateTime.FixedLocalNow


Vráti aktuálny dátum a čas v miestnom časovom pásme. Táto hodnota je pevne stanovená a pri ďalších volaniach sa nezmení.


## Syntax

```powerquery
DateTime.FixedLocalNow(

) as datetime
```


## Remarks

Vráti hodnotu `datetime` nastavenú na aktuálny dátum a čas v systéme. Táto hodnota je pevne stanovená a nezmení sa pri ďalších volaniach, na rozdiel od hodnoty DateTime.LocalNow, ktorá môže vrátiť odlišné hodnoty počas uskutočnenia výrazu.



## Category
DateTime
