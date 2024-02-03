---
title: DateTime.ToRecord
---

# DateTime.ToRecord


## Description

Returnează o înregistrare ce conţine părţi din valoarea datetime.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Details

Returnează o înregistrare care conține părți din valoarea datetime dată, <code>dateTime</code>. <ul>        <li><code>dateTime</code>: o valoare <code>datetime</code> pentru care urmează să fie calculată înregistrarea părților sale.</li>      </ul>


## Examples

### Example #1 
Convertiţi valoarea &lt;code&gt;#datetime(2011, 12, 31, 11, 56, 2)&lt;/code&gt; într-o înregistrare ce conţine valori pentru dată şi oră.
```powerquery
DateTime.ToRecord(#datetime(2011, 12, 31, 11, 56, 2))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
DateTime
