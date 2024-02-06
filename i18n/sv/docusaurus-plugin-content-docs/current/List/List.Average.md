---
title: List.Average
---

# List.Average


Returnerar medelvärdet av värdena. Kan användas med number-, date-, datetime-, datetimezone- och duration-värden.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Returnerar medelvärdet för objekten i listan, <code>list</code>. Resultatet returneras med samma datatype som värdena i listan. Kan endast användas med number-, date-, time-, datetime-, datetimezone- och duration-värden.    Om listan är tom returneras null.


## Examples

### Example #1 
Hitta medelvärdet för listan med tal, &lt;code&gt;\{3, 4, 6}&lt;/code&gt;.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
Hitta medelvärdet för datumvärdena 1 januari 2011, 2 januari 2011 och 3 januari 2011.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
