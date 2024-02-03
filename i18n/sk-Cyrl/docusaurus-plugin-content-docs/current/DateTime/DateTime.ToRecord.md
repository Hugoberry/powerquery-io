---
title: DateTime.ToRecord
---

# DateTime.ToRecord


## Description

Vráti záznam obsahujúci časti hodnoty dátumu a času.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Details

Vráti záznam obsahujúci časti danej hodnoty datetime <code>dateTime</code>. <ul>        <li><code>dateTime</code>: Hodnota <code>datetime</code>, z ktorej častí sa vypočíta príslušný záznam.</li>      </ul>


## Examples

### Example #1 
Konvertuje hodnotu &lt;code&gt;#datetime(2011, 12, 31, 11, 56, 2)&lt;/code&gt; na záznam obsahujúci hodnoty Dátum a Čas.
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
