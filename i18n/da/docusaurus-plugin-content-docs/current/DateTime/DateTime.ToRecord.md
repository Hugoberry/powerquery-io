---
title: DateTime.ToRecord
---

# DateTime.ToRecord


## Description

Returnerer en post, der indeholder delene fra værdien af typen datetime.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Details

Returnerer en post, der indeholder delene fra en bestemt værdi af typen datetime, <code>dateTime</code>. <ul>        <li><code>dateTime</code>: En værdi af typen <code>datetime</code>, som delenes post skal beregnes ud fra.</li>      </ul>


## Examples

### Example #1 
Konvertér værdien af typen &lt;code&gt;#datetime(2011, 12, 31, 11, 56, 2)&lt;/code&gt; til en post, der indeholder værdier af typen Date og Time.
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
