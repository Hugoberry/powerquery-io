---
title: Time.ToRecord
---

# Time.ToRecord


## Description

Egy olyan rekordot ad vissza, amely tartalmazza az időérték részeit.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Details

Egy olyan rekordot ad vissza, amely tartalmazza a megadott <code>time</code> időérték részeit. <ul>        <li><code>time</code>: Egy <code>time</code> érték, amelyből a részeit tartalmazó rekord számítva lesz.</li>      </ul>


## Examples

### Example #1 
A &lt;code&gt;#time(11, 56, 2)&lt;/code&gt; érték konvertálása egy olyan rekordra, amely tartalmazza az idő értékét
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
