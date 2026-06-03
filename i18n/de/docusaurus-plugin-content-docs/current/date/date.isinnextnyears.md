---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob dieses Datum während der nächsten Anzahl von Jahren auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb des aktuellen Jahrs auftritt.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob der angegebene datetime-Wert "`dateTime`" während der nächsten Anzahl von Jahren auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb des aktuellen Jahrs auftritt.

-   `dateTime`: Ein `date`\-, `datetime`\- oder `datetimezone`\-Wert, der ausgewertet werden soll.
-   `years`: Die Anzahl von Jahren.


## Examples

### Example #1
Bestimmt, ob das Jahr nach der aktuellen Systemzeit innerhalb der nächsten zwei Jahre liegt.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
