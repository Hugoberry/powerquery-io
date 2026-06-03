---
title: Time.From
---

# Time.From


Skapar en tid från det angivna värdet.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Returnerar ett `time`\-värde från angiven `value`. En valfri `culture` kan även anges (till exempel, "en-US"). Om `value` är `null`, returnerar `Time.From` `null`. Om `value` är `time`, returneras `value`. Värden av följande typer kan konverteras till ett `time`\-värde:

-   `text`: Ett `time`\-värde från textrepresentationen. Mer information finns under `Time.FromText`.
-   `datetime`: Tidskomponenten för `value`.
-   `datetimezone`: Tidskomponenten för det lokala datetime-värdet som motsvarar `value`.
-   `number`: Ett `time`\-värde som motsvarar antalet hela och fraktionella dagar uttryckt med `value`. Om `value` är negativt eller större än eller lika med 1 returneras ett fel.

Om `value` hör till en annan typ returneras ett fel.


## Examples

### Example #1
Konvertera `0.7575` till ett `time`\-värde.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
Konvertera `#datetime(1899, 12, 30, 06, 45, 12)` till ett `time`\-värde.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
