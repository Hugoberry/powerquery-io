---
title: Date.ToRecord
---

# Date.ToRecord


## Description

Gibt einen Datensatz mit Teilen des Datumswerts zurück.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Details

Gibt einen Datensatz mit den Teilen des angegebenen Datumswerts (<code>date</code>) zurück. <ul>        <li><code>date</code>: Ein <code>date</code>-Wert, auf dessen Grundlage der Datensatz mit den zugehörigen Teilen berechnet werden soll.</li>      </ul>


## Examples

### Example #1 
Konvertiert den Wert &lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; in einen Datensatz mit Teilen aus dem Datumswert.
```powerquery
Date.ToRecord(#date(2011, 12, 31))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31
]
```




## Category
Date
