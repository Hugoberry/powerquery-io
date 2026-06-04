---
title: Duration.FromText
---

# Duration.FromText


Pateikiama trukmės reikšmė iš tekstinių praėjusio laiko formų (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Pateikiama trukmės reikšmė iš nurodyto teksto `text`. Ši funkcija gali analizuoti šiuos formatus:

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(Visuose intervaluose reikšmės nurodytos imtinai)

-   ddd: dienų skaičius.
-   hh: valandų skaičius, tarp 0 ir 23.
-   mm: minučių skaičius, tarp 0 ir 59.
-   ss: sekundžių skaičius, tarp 0 ir 59.
-   ff: sekundžių dalis, tarp 0 ir 9999999.


## Examples

### Example #1
Konvertuokite `"2.05:55:20"` į `duration` reikšmę.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
