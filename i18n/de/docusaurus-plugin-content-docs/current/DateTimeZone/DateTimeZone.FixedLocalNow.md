---
title: DateTimeZone.FixedLocalNow
---

# DateTimeZone.FixedLocalNow


## Description

Gibt das aktuelle Datum und die aktuelle Uhrzeit in der lokalen Zeitzone zurück. Dies ist ein fester Wert, der sich bei aufeinanderfolgenden Aufrufen nicht ändert.


## Syntax

```powerquery
DateTimeZone.FixedLocalNow(

) as datetimezone
```


## Details

Gibt einen <code>datetime</code>-Wert zurück, der auf das aktuelle Datum und die aktuelle Uhrzeit im System festgelegt ist. Der zurückgegebene Wert enthält Zeitzoneninformationen für die lokale Zeitzone. Dies ist ein fester Wert, der sich bei aufeinanderfolgenden Aufrufen nicht ändert. Im Gegensatz dazu kann 'DateTimeZone.LocalNow' während der Ausführung eines Ausdrucks unterschiedliche Werte zurückgeben.



## Category
DateTimeZone
