---
title: Duration.ToText
---

# Duration.ToText


Vráti text vo formáte d.h:m:s.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Vráti textové vyjadrenie vo formáte day.hour:mins:sec danej hodnoty trvania, `duration`.

-   `duration`: `duration`, na základe ktorého sa vypočíta textové vyjadrenie.
-   `format`: *(Voliteľné)* Zastarané, ak nie je hodnota null, vyvolá chybu.


## Examples

### Example #1
Konvertujte hodnotu `#duration(2, 5, 55, 20)` na textovú hodnotu.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
