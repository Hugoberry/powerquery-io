---
title: DateTime.ToRecord
---

# DateTime.ToRecord


## Description

Returnerar en post som innehåller delarna i datetime-värdet.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Details

Returnerar en post som innehåller delarna i det angivna datetime-värdet <code>dateTime</code>. <ul>        <li><code>dateTime</code>: Ett <code>datetime</code>-värde som posten med värdets delar ska beräknas från.</li>      </ul>


## Examples

### Example #1 
Konvertera &lt;code&gt;#datetime(2011, 12, 31, 11, 56, 2)&lt;/code&gt;-värdet till en post som innehåller datum- och tidsvärden.
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
