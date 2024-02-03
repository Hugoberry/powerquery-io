---
title: Date.WeekOfYear
---

# Date.WeekOfYear


## Description

Pateikiamas skaičius nuo 1 iki 54, rodantis, į kurią metų savaitę patenka ši data.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Pateikia skaičių nuo 1 iki 54, nurodantį, į kurią metų savaitę patenka data <code>dateTime</code>. <ul>        <li><code>dateTime</code>: <code>datetime</code> reikšmė, kurios metų savaitė nustatoma.</li>        <li><code>firstDayOfWeek</code>: Pasirenkama <code>Day.Type</code> reikšmė, nurodanti dieną, kuri laikoma naujos savaitės pradžia (pvz., <code>Day.Sunday</code>). Jei nenurodyta, naudojama numatytoji reikšmė pagal kultūrą.</li>      </ul>


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
