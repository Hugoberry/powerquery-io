---
title: Time.From
---

# Time.From


Opretter et klokkeslæt ud fra den angivne værdi.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Returnerer en værdi af typen `time` ud fra den angivne `value`. Der kan også gives angives en valgfri `culture` (f.eks. "en-US"). Hvis den angivne `value` er `null`, vil `Time.From` returnere `null`. Hvis den angivne `value` er `time`, returneres `value`. Værdier af følgende typer kan konverteres til en værdi af typen `time`:

-   `text`: En værdi af typen `time` fra en tekstrepræsentation. Se `Time.FromText` for at få flere oplysninger.
-   `datetime`: Klokkeslætskomponent for `value`.
-   `datetimezone`: Klokkeslætskomponenten for den lokale datetime-ækvivalens for `value`.
-   `number`: En ækvivalens af typen `time` til antallet af brøkdage udtrykt ved `value`. Hvis `value` er negativ eller større end eller lig med 1, returneres der en fejl.

Hvis `value` er af en anden type, returneres der en fejl.


## Examples

### Example #1
Konvertér `0.7575` til en værdi af typen `time`.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
Konvertér `#datetime(1899, 12, 30, 06, 45, 12)` til en værdi af typen `time`.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
