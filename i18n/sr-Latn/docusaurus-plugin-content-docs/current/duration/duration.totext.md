---
title: Duration.ToText
---

# Duration.ToText


Vraća tekst oblika „d.h:m:s“.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Vraća tekstualnu reprezentaciju u obliku „dan.sat:minuti:sekunde“ date vrednosti trajanja, `duration`.

-   `duration`: `Trajanje` na osnovu kojeg se izračunava tekstualna reprezentacija.
-   `format`: *(Opcionalno)* Zastarelo, podići će grešku ako nije bez vrednosti.


## Examples

### Example #1
Konvertovanje `#duration(2, 5, 55, 20)` u tekstualnu vrednost.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
