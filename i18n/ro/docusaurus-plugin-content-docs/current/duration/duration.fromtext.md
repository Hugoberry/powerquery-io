---
title: Duration.FromText
---

# Duration.FromText


Returnează o valoare pentru durată din formele textuale ale timpului scurs (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Returnează o valoare pentru durată din textul specificat, `text`. Următoarele formate pot fi analizate de această funcție:

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(Toate intervalele includ capetele)

-   ddd: numărul de zile.
-   hh: numărul de ore, între 0 și 23.
-   mm: numărul de minute, între 0 și 59.
-   ss: numărul de secunde, între 0 și 59.
-   ff: fracțiune de secunde, între 0 și 9999999.


## Examples

### Example #1
Convertiţi `"2.05:55:20"` într-o valoare `duration`.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
