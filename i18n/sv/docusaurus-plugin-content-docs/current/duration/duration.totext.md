---
title: Duration.ToText
---

# Duration.ToText


Returnerar texten i formatet "d.h:m:s".


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Returnerar en textrepresentation i formatet dag.timme:minuter:sekunder för det givna varaktighetsvärdet `duration`.

-   `duration`: En `varaktighet` som textrepresentationen beräknas från.
-   `format`: *\[Valfritt\]* Inaktuellt, utlöser ett fel om inte null.


## Examples

### Example #1
Konvertera `#duration(2, 5, 55, 20)` till ett textvärde.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
