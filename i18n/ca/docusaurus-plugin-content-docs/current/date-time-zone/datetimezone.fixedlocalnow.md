---
title: DateTimeZone.FixedLocalNow
---

# DateTimeZone.FixedLocalNow


Retorna la data i hora actuals al fus horari local. Aquest valor és fix i no canviarà amb crides successives.


## Syntax

```powerquery
DateTimeZone.FixedLocalNow(

) as datetimezone
```


## Remarks

Retorna un conjunt de valors `datetime` a la data i hora actuals al sistema. El valor retornat conté informació de fus horari que representa el fus horari local. Aquest valor és fix i no canviarà amb crides successives, a diferència de DateTimeZone.LocalNow, que pot retornar valors diferents en el transcurs de l'execució d'una expressió.



## Category
DateTimeZone
