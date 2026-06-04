---
title: DateTime.From
---

# DateTime.From


Creează o valoare datetime din valoarea dată.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Returnează o valoare `datetime` din `value` dat. De asemenea, poate fi furnizat un parametru `culture` opțional (de exemplu, „ro-RO”). Dacă `value` dat este `null`, `DateTime.From` returnează `null`. Dacă `value` dat este `datetime`, se returnează `value`. Valorile următoarelor tipuri pot fi convertite într-o valoare `datetime`:

-   `text`: o valoare `datetime` din reprezentarea textuală. Pentru detalii, consultați `DateTime.FromText`.
-   `date`: o valoare `datetime` cu `value` drept componentă date și `12:00:00 AM` drept componentă time.
-   `datetimezone`: echivalentul `datetime` local al `value`.
-   `time`: o valoare `datetime` cu echivalentul de tip dată calendaristică al OLE Automation Date cu `0` pentru componenta date și `value` pentru componenta time.
-   `number`: un echivalent de tip `datetime` al OLE Automation Date exprimată de `value`.

Dacă `value` este de orice alt tip, se returnează o eroare.


## Examples

### Example #1
Convertiţi `#time(06, 45, 12)` la o valoare `datetime`.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
Convertiţi `#date(1975, 4, 4)` la o valoare `datetime`.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
