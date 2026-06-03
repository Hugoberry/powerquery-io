---
title: DateTime.ToRecord
---

# DateTime.ToRecord


Returnerer en post, der indeholder delene fra værdien af typen datetime.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

Returnerer en post, der indeholder delene fra en bestemt værdi af typen datetime, `dateTime`.

-   `dateTime`: En værdi af typen `datetime`, som delenes post skal beregnes ud fra.


## Examples

### Example #1
Konvertér værdien af typen `#datetime(2011, 12, 31, 11, 56, 2)` til en post, der indeholder værdier af typen Date og Time.
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
