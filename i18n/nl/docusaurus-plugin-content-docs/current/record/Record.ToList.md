---
title: Record.ToList
---

# Record.ToList


Retourneert een lijst met waarden die de veldwaarden van de invoerrecord bevatten.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Remarks

Retourneert een lijst met waarden die de veldwaarden uit de invoer <code>record</code> bevatten.


## Examples

### Example #1 
De veldwaarden uit een record extraheren.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
