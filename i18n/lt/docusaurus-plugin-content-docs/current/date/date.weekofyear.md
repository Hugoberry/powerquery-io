---
title: Date.WeekOfYear
---

# Date.WeekOfYear


Pateikiamas skaičius nuo 1 iki 54, rodantis, į kurią metų savaitę patenka ši data.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Pateikia skaičių nuo 1 iki 54, nurodantį, į kurią metų savaitę patenka data `dateTime`.

-   `dateTime`: `datetime` reikšmė, kurios metų savaitė nustatoma.
-   `firstDayOfWeek`: Pasirenkama `Day.Type` reikšmė, nurodanti dieną, kuri laikoma naujos savaitės pradžia (pvz., `Day.Sunday`). Jei nenurodyta, naudojama numatytoji reikšmė pagal kultūrą.


## Examples

### Example #1
Nustatyti, kurioje metų savaitėje yra 2011 m. kovo 27 d.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2
Nustatykite, į kurią metų savaitę patenka 2011 m. kovo 27 d., naudodami pirmadienį kaip savaitės pradžią.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
