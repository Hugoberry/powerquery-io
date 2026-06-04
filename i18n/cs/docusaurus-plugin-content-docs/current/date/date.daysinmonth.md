---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Vrátí číslo od 28 do 31 představující počet dní v měsíci.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Vrací číslo představující počet dní v měsíci v hodnotě `date`, `datetime` nebo `datetimezone`, `dateTime`.

-   `dateTime`: Hodnota `date`, `datetime` nebo `datetimezone`, pro kterou je vrácen počet dní v měsíci.


## Examples

### Example #1
Počet dní v prosinci, jak je přestavováno řetězcem `#date(2011, 12, 01)>`.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
