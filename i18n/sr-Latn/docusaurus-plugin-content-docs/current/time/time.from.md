---
title: Time.From
---

# Time.From


Kreira vreme od date vrednosti.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Vraća vrednost `time` od datog `value`. Opcionalno se može navesti i `culture` (na primer, „en-US“). Ako dati `value` predstavlja `null`, `Time.From` vraća `null`. Ako dati `value` predstavlja `time`, vraća se `value`. Vrednosti sledećih tipova se mogu konvertovati u vrednost `time`:

-   `text`: Vrednost `time` od tekstualne reprezentacije. Pogledajte `Time.FromText` za detalje.
-   `datetime`: Komponenta vremena za `value`.
-   `datetimezone`: Komponenta vremena lokalnog ekvivalenta datuma i vremena za `value`.
-   `number`: `time` ekvivalent broju decimalnih dana izraženih pomoću `value`. Ako je `value` negativno ili veće ili jednako 1, vraća se greška.

Ako je `value` nekog drugog tipa, vraća se greška.


## Examples

### Example #1
Konvertovanje `0.7575` u vrednost `time`.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
Konvertovanje `#datetime(1899, 12, 30, 06, 45, 12)` u vrednost `time`.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
