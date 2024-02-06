---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Gibt eine Zahl zwischen 28 und 31 zurück, um die Anzahl von Tagen des Monats anzugeben.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Gibt die Anzahl von Tagen im Monat für den <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Wert "<code>dateTime</code>" zurück. <ul>        <li><code>dateTime</code>: Ein <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Wert, für den die Anzahl von Tagen im Monat zurückgegeben wird.</li>      </ul>


## Examples

### Example #1 
Die Anzahl von Tagen im Monat Dezember (dargestellt als &lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt;).
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
