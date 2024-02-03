---
title: DateTime.ToRecord
---

# DateTime.ToRecord


## Description

Retourneert een record die onderdelen van de datum-/tijdwaarde bevat.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Details

Hiermee wordt een record geretourneerd met de onderdelen van de opgegeven datetime-waarde, <code>dateTime</code>. <ul> <li><code>dateTime</code>: een <code>datetime</code>-waarde op basis waarvan de record of de onderdelen daarvan moeten worden berekend.</li> </ul>


## Examples

### Example #1 
De waarde voor de &lt;code&gt;#datetime(2011, 12, 31, 11, 56, 2)&lt;/code&gt; omzetten naar een record die waarden voor datum en tijd bevat.
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
