---
title: Duration.FromText
---

# Duration.FromText


Vrne vrednost trajanja iz besedilnih oblik pretečenega časa (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Vrne vrednost trajanja določenega besedila, `text`. Ta funkcija omogoča razčlenitev teh oblik zapisov:

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(Vsi obsegi so vključeni)

-   ddd: število dni.
-   hh: število ur, med 0 in 23.
-   mm: število minut, med 0 in 59.
-   ss: število sekund, med 0 in 59.
-   ff: stotinke, med 0 in 9999999.


## Examples

### Example #1
Pretvorite `"2.05:55:20"` v vrednost `duration`.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
