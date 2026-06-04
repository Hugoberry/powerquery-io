---
title: Duration.ToText
---

# Duration.ToText


Atgriež tekstu formā d.h:m:s.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Atgriež norādītās ilguma vērtības `duration`teksta izteiksmi formātā “dienas.stundas:minūtes:sekundes”.

-   `duration`: `duration`, no kura tiek aprēķināts teksta attēlojums.
-   `format`: *(neobligāti)* novecojis. Tiks izraisīta kļūda, ja šī parametra vērtība nebūs null


## Examples

### Example #1
Pārveidojiet `#duration(2, 5, 55, 20)` par teksta vērtību.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
