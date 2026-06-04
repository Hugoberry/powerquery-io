---
title: Duration.ToText
---

# Duration.ToText


Returnează text în forma „d.h:m:s”.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Returnează o reprezentare textuală în forma „day.hour:mins:sec” a valorii durată date, `duration`.

-   `duration`: o `durată` din care se calculează reprezentarea textuală.
-   `format`: *\[opțional\]* Depreciat, va genera o eroare dacă nu este nul.


## Examples

### Example #1
Convertiţi `#duration(2, 5, 55, 20)` într-o valoare text.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
