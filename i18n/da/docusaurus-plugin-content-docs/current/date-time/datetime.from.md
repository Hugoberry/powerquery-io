---
title: DateTime.From
---

# DateTime.From


Opretter en dato og et klokkeslæt ud fra den angivne værdi.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Returnerer en værdi af typen `datetime` ud fra den angivne `value`. Der kan også angives en valgfri `culture` (f.eks. "en-US"). Hvis den angivne `value` er `null`, vil `DateTime.From` returnere `null`. Hvis den angivne `value` er `datetime`, returneres `value`. Værdier af følgende typer kan konverteres til en værdi af typen `datetime`:

-   `text`: En værdi af typen `datetime` fra en tekstrepræsentation. Se `DateTime.FromText` for at få flere oplysninger.
-   `date`: En værdi af typen `datetime` med `value` som datokomponent og `12:00:00 AM` som tidskomponent.
-   `datetimezone`: Den lokale `datetime`\-ækvivalens for `value`.
-   `time`: En `datetime` med datoækvivalensen for OLE Automation-datoen `0` som datokomponent og `value` som klokkeslætskomponent.
-   `number`: En `datetime`\-ækvivalens for OLE Automation-datoen udtrykt ved `value`.

Hvis `value` er af en anden type, returneres der en fejl.


## Examples

### Example #1
Konvertér `#time(06, 45, 12)` til en værdi af typen `datetime`.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
Konvertér `#date(1975, 4, 4)` til en værdi af typen `datetime`.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
