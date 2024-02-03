---
title: Date.EndOfWeek
---

# Date.EndOfWeek


## Description

Pateikia savaitės pabaigą.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Pateikiama savaitės, kurioje yra <code>dateTime</code>, pabaiga.Ši funkcija naudoja pasirinktinę <code>Day</code>, <code>firstDayOfWeek</code>, kad būtų nustatyta kaip pirmoji šio santykinio skaičiavimo savaitės diena. Numatytoji reikšmė yra <code>Day.Sunday</code>.      <ul>        <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> arba <code>datetimezone</code> reikšmė, pagal kurią apskaičiuojama paskutinė savaitės diena</li>        <li><code>firstDayOfWeek</code>: <i>[Pasirenkama]</i> <code>Day.Type</code> reikšmė, rodanti pirmą savaitės dieną. Galimos reikšmės <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code>, <code>Day.Wednesday</code>, <code>Day.Thursday</code>, <code>Day.Friday</code> ir <code>Day.Saturday.</code>. Numatytoji reikšmė yra <code>Day.Sunday</code>.</li>      </ul>


## Examples

### Example #1 
Gauti 2011 05 14 svaitės pabaigą.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2 
Gauti 2011 05 17 05:00:00 po pietų -7:00 savaitės pabaigą, kai pirmoji savaitės diena yra sekmadienis.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
