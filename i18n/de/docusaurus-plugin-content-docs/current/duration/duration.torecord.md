---
title: Duration.ToRecord
---

# Duration.ToRecord


Gibt einen Datensatz mit den Teilen der Dauer zurück.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Gibt einen Datensatz mit den Teilen des duration-Werts "<code>duration</code>" zurück.  <ul>        <li><code>duration</code>: Ein <code>duration</code>-Wert, auf dessen Grundlage der Datensatz erstellt wird.</li>      </ul>


## Examples

### Example #1 
Konvertiert &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; in einen Datensatz mit den zugehörigen Teilen (einschließlich Tage, Minuten und Sekunden, sofern zutreffend).
```powerquery
Duration.ToRecord(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
[
    Days = 2,
    Hours = 5,
    Minutes = 55,
    Seconds = 20
]
```




## Category
Duration
