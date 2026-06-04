---
title: Duration.ToText
---

# Duration.ToText


Vrne besedilo oblike"d.h:m:s".


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Vrne besedilno predstavitev v obliki"day.hour:mins:sec"iz navedene vrednosti trajanja `duration`.

-   `duration`: Parameter `duration`, ki služi za izračun besedilne predstavitve.
-   `format`: *(Izbirno)* Opuščeno; če vrednost ni"null", pride do napake.


## Examples

### Example #1
Pretvorite `#duration(2, 5, 55, 20)` v besedilno vrednost.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
