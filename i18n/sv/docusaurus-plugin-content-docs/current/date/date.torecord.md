---
title: Date.ToRecord
---

# Date.ToRecord


Returnerar en post som innehåller delarna i datumvärdet.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

Returnerar en post som innehåller delarna i det angivna datumvärdet `date`.

-   `date`: Ett `date`\-värde som posten med värdets delar ska beräknas från.


## Examples

### Example #1
Konvertera `#date(2011, 12, 31)`\-värdet till en post som innehåller delar från datumvärdet.
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
