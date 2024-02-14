---
title: DateTimeZone.FixedLocalNow
---

# DateTimeZone.FixedLocalNow


Restituisce la data e l&#39;ora correnti nel fuso orario locale. Questo valore è fisso e non cambia con le chiamate successive.


## Syntax

```powerquery
DateTimeZone.FixedLocalNow(

) as datetimezone
```


## Remarks

Restituisce un valore <code>datetime</code> impostato sulla data e sull'ora correnti del sistema. Il valore restituito contiene le informazioni del fuso orario che rappresentano il fuso orario locale. Questo valore è fisso e non cambia con le chiamate successive, diversamente da DateTimeZone.LocalNow che può restituire valori diversi durante l'esecuzione di un'espressione.



## Category
DateTimeZone
