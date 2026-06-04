---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Vrátí konec týdne.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Vrátí konec týdne, který obsahuje `dateTime`. Tato funkce používá volitelný `den` `firstDayOfWeek`, který se pro tento relativní výpočet nastaví jako první den v týdnu. Výchozí hodnota je `Day.Sunday`.

-   `dateTime`: Hodnota `date`, `datetime` nebo `datetimezone`, ze které se počítá poslední den v týdnu
-   `firstDayOfWeek`: *(Volitelné)* Hodnota `Day.Type` představuje první den v týdnu. Možné hodnoty jsou `Day.Sunday`, `Day.Monday`, `Day.Tuesday`, `Day.Wednesday`, `Day.Thursday`, `Day.Friday` a `Day.Saturday`. Výchozí hodnota je `Day.Sunday`.


## Examples

### Example #1
Vrátí konec týdne pro hodnotu 5/14/2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2
Vrátí konec týdne pro hodnotu 5/17/2011 05:00:00 PM -7:00, přičemž použije neděli jako první den týdne.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
