---
title: Time.From
---

# Time.From


Creează o valoare time din valoarea dată.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Returnează o valoare `time` din `value` dat. De asemenea, poate fi furnizat un parametru `culture` opțional (de exemplu, „ro-RO”). Dacă `value` dat este `null`, `Time.From` returnează `null`. Dacă `value` dat este `time`, se returnează `value`. Valorile de următoarele tipuri pot fi convertite la o valoare `time`:

-   `text`: o valoare `time` din reprezentarea textuală. Pentru detalii, consultați `Time.FromText`.
-   `datetime`: componenta time a `value`.
-   `datetimezone`: componenta time a echivalentului de tip datetime local al `value`.
-   `number`: o valoare `time` echivalentă cu numărul de zile fracționare exprimate de `value`. Dacă `value` este negativ sau mai mare sau egal cu 1, se returnează o eroare.

Dacă `value` este de orice alt tip, se returnează o eroare.


## Examples

### Example #1
Convertiţi `0.7575` la o valoare `time`.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
Convertiţi `#datetime(1899, 12, 30, 06, 45, 12)` la o valoare `time`.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
