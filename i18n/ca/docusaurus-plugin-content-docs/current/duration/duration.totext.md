---
title: Duration.ToText
---

# Duration.ToText


Retorna el text de la forma "d.h:m:s".


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Retorna una representació textual en el format "dia.hora.minut:segon" del valor de durada determinat, `duration`.

-   `duration`: una `durada` mitjançant la qual es calcula la representació textual.
-   `format`: *(opcional)* es troba en desús; si no es nul, es generarà un error.


## Examples

### Example #1
Converteix `#duration(2, 5, 55, 20)` en un valor de text.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
