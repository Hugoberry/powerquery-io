---
title: Time.ToRecord
---

# Time.ToRecord


Gibt einen Datensatz mit den Teilen des time-Werts zurück.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Gibt einen Datensatz mit den Teilen des angegebenen time-Werts (<code>time</code>) zurück. <ul>        <li><code>time</code>: Ein <code>time</code>-Wert, auf dessen Grundlage der Datensatz mit den zugehörigen Teilen berechnet werden soll.</li>      </ul>


## Examples

### Example #1 
Konvertiert den Wert &lt;code&gt;#time(11, 56, 2)&lt;/code&gt; in einen Datensatz mit time-Werten.
```powerquery
Time.ToRecord(#time(11, 56, 2))
```

Result: 
```powerquery
[
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
Time
