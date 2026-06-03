---
title: Time.ToRecord
---

# Time.ToRecord


Returnerar en post som innehåller delarna i time-värdet.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Returnerar en post som innehåller delarna i det angivna tidsvärdet `time`.

-   `time`: Ett `time`\-värde som posten med värdets delar ska beräknas från.


## Examples

### Example #1
Konvertera `#time(11, 56, 2)`\-värdet till en post som innehåller tidsvärden.
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
