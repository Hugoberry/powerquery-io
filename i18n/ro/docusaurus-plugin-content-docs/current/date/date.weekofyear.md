---
title: Date.WeekOfYear
---

# Date.WeekOfYear


Returnează un număr de la 1 la 54 care indică în ce săptămână a anului cade această dată.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Returnează un număr de la 1 la 54 care indică în ce săptămână din an cade data, `dateTime`.

-   `dateTime`: O valoare `datetime` pentru care este determinată săptămâna din an.
-   `firstDayOfWeek`: O valoare opțională `Day.Type` care indică ziua considerată drept începutul unei noi săptămâni (de exemplu, `Day.Sunday`). Dacă nu se specifică, se utilizează o valoare implicită dependentă de cultură.


## Examples

### Example #1
Determinați ce săptămână a anului conține 27 martie 2011.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2
Determinați ce săptămână din an conține 27 martie 2011, utilizând ziua de luni ca începutul săptămânii.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
