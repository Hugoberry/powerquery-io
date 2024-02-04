---
title: Date.Day
---

# Date.Day


## Description

Gibt die Tageskomponente zurück.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Details

Gibt die Tageskomponente eines <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Werts zurück.      <ul>        <li><code>dateTime</code>: Ein <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Wert, aus dem die Tageskomponente extrahiert wird.</li>      </ul>


## Examples

### Example #1 
Ruft die Tageskomponente eines &lt;code&gt;date&lt;/code&gt;-, &lt;code&gt;datetime&lt;/code&gt;- oder &lt;code&gt;datetimezone&lt;/code&gt;-Werts für den 14.05.2011, 17:00:00 Uhr ab.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
