---
title: DateTime.From
---

# DateTime.From


Kreira datum i vreme od date vrednosti.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Vraća vrednost `datetime` od datog `value`. Opcionalno se može navesti i `culture` (na primer, „en-US“). Ako dati `value` predstavlja `null`, `DateTime.From` vraća `null`. Ako dati `value` predstavlja `datetime`, vraća se `value`. Vrednosti sledećih tipova se mogu konvertovati u vrednost `datetime`:

-   `text`: Vrednost `datetime` od tekstualne reprezentacije. Pogledajte `DateTime.FromText` za detalje.
-   `date`: `datetime` sa `value` kao komponentom datuma i `12:00:00 AM` kao komponentom vremena.
-   `datetimezone`: Lokalni `datetime` ekvivalent za `value`.
-   `time`: `datetime` sa ekvivalentom datuma za datum OLE automatizacije sa `0` kao komponentom datuma i `value` kao komponentom vremena.
-   `number`: `datetime` ekvivalent datuma OLE automatizacije izražen pomoću `value`.

Ako je `value` nekog drugog tipa, vraća se greška.


## Examples

### Example #1
Konvertovanje `#time(06, 45, 12)` u vrednost `datetime`.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
Konvertovanje `#date(1975, 4, 4)` u vrednost `datetime`.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
