---
title: DateTimeZone.FixedLocalNow
---

# DateTimeZone.FixedLocalNow


## Description

Vráti aktuálny dátum a čas v miestnom časovom pásme. Táto hodnota je pevne stanovená a nezmení sa pri ďalších volaniach.


## Syntax

```powerquery
DateTimeZone.FixedLocalNow(

) as datetimezone
```


## Details

Vráti hodnotu <code>datetime</code> nastavenú na aktuálny dátum a čas v systéme. Vrátená hodnota obsahuje informácie o časovom pásme predstavujúce miestne časové pásmo. Táto hodnota je pevne stanovená a nezmení sa pri ďalších volaniach, na rozdiel od hodnoty DateTimeZone.LocalNow, ktorá môže vrátiť odlišné hodnoty počas uskutočnenia výrazu.



## Category
DateTimeZone
