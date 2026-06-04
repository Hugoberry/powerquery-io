---
title: Duration.FromText
---

# Duration.FromText


Vraća vrednost trajanja od tekstualnih oblika proteklog vremena (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Vraća vrednost trajanja iz navedenog teksta, `text`. Ova funkcija može da raščlanjuje sledeće formate:

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(Svi opsezi su uključeni)

-   ddd: Broj dana.
-   hh: Broj časova, između 0 i 23.
-   mm: Broj minuta, između 0 i 59.
-   ss: Broj sekundi, između 0 i 59.
-   ff: Delovi sekundi, između 0 i 9999999.


## Examples

### Example #1
Konvertovanje `"2.05:55:20"` u vrednost `duration`.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
