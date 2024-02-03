---
title: Date.ToRecord
---

# Date.ToRecord


## Description

Egy olyan rekordot ad vissza, amely tartalmazza a dátumérték részeit.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Details

Egy olyan rekordot ad vissza, amely tartalmazza a megadott <code>date</code> dátumérték részeit. <ul>        <li><code>date</code>: Egy <code>date</code> érték, amelyből a részeit tartalmazó rekord számítva lesz.</li>      </ul>


## Examples

### Example #1 
A &lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; érték konvertálása egy olyan rekordra, amely tartalmazza a dátumérték részeit
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
