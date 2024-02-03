---
title: Date.DayOfWeek
---

# Date.DayOfWeek


## Description

Pateikiamas skaičius (nuo 0 iki 6), nurodantis pateiktos reikšmės savaitės dieną.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Details

Pateikiamas skaičius (nuo 0 iki 6), nurodantis pateiktos <code>dateTime</code> savaitės dieną.  <ul>        <li><code>dateTime</code>: <code>datos</code>, <code>datos ir laiko</code> arba <code>datos ir laiko juostos</code> reikšmė.</li>        <li><code>firstDayOfWeek</code>: <code>dienos</code> reikšmė, nurodanti dieną, kuri turi būti laikoma pirmąja savaitės diena. Leidžiamos reikšmės: Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday arba Day.Saturday. Jei nenurodyta, naudojama numatytoji reikšmė, priklausanti nuo kultūros.</li>      </ul>


## Examples

### Example #1 
Savaitės diena nurodoma kaip 2011 m. vasario 21 d. (pirmadienis), kai pirmąja savaitės diena laikomas sekmadienis.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2 
Savaitės diena nurodoma kaip 2011 m. vasario 21 d. (pirmadienis), kai pirmąja savaitės diena laikomas pirmadienis.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
