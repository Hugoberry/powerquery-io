---
title: Duration.ToText
---

# Duration.ToText


Mengembalikan teks dari bentuk "d.h:m:s".


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Mengembalikan perwakilan teks dalam bentuk "day.hour:mins:sec" bagi nilai tempoh yang diberikan, `duration`.

-   `duration`: `Tempoh` yang digunakan untuk mengira perwakilan teks.
-   `format`: *(Pilihan)* ditamatkan, akan membangkitkan ralat jika tidak nol.


## Examples

### Example #1
Menukar `#duration(2, 5, 55, 20)` menjadi nilai teks.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
