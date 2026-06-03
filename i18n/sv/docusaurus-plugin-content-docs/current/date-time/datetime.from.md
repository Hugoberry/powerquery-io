---
title: DateTime.From
---

# DateTime.From


Skapar ett datetime-värde från det angivna värdet.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Returnerar ett `datetime`\-värde från angiven `value`. En valfri `culture` kan även anges (till exempel, "en-US"). Om `value` är `null` returnerar `DateTime.From` `null`. Om `value` är `datetime` returneras `value`. Värden av följande typer kan konverteras till ett `datetime`\-värde:

-   `text`: Ett `datetime`\-värde från textrepresentationen. Mer information finns under `DateTime.FromText`.
-   `date`: Ett `datetime`\-värde med `value` som datumkomponent och `12:00:00 AM` som tidskomponent.
-   `datetimezone`: Det lokala `datetime`\-värdet som motsvarar `value`.
-   `time`: Ett `datetime`\-värde med datumvärdet för OLE-automationsdatumet `0` som datumkomponent och `value` som tidskomponent.
-   `number`: Ett `datetime`\-värde som motsvarar OLE-automationsdatumet uttryckt med `value`.

Om `value` hör till en annan typ returneras ett fel.


## Examples

### Example #1
Konvertera `#time(06, 45, 12)` till ett `datetime`\-värde.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
Konvertera `#date(1975, 4, 4)` till ett `datetime`\-värde.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
