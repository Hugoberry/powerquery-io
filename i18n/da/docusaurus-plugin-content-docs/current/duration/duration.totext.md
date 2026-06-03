---
title: Duration.ToText
---

# Duration.ToText


Returnerer teksten i formatet "d.h:m:s".


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Returnerer en tekstrepræsentation i formatet "dag.time:mins:sek" for den givne varighedsværdi, `duration`.

-   `duration`: A `duration` hvorfra tekstrepræsentationen beregnes.
-   `format`: *(Valgfri)* Udfaset, vil udløse en fejl hvis ikke null.


## Examples

### Example #1
Konvertér `#duration(2, 5, 55, 20)` til en tekstværdi.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
