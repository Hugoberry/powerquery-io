---
title: Date.WeekOfYear
---

# Date.WeekOfYear


Vrátí číslo v rozsahu 1 až 54 značící, do kterého týdne roku spadá toto datum.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Vrátí číslo od 1 do 54, které znamená, do jakého týdne roku datum `dateTime` spadá do.

-   `dateTime`: Hodnota `datetime`, pro kterou se týden roku určuje.
-   `firstDayOfWeek`: Volitelná hodnota `Day.Type`, která určuje, který den se považuje za začátek nového týdne (například `Day.Sunday`). Pokud tento parametr není zadán, se použije se výchozí začátek týdne definovaný v jazykové verzi.


## Examples

### Example #1
Určete, který týden v roce obsahuje 27. března 2011.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2
Určete, který týden v roce obsahuje 27. března 2011, a jako začátek týdne použijte pondělí.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
