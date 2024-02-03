---
title: Date.DayOfWeek
---

# Date.DayOfWeek


## Description

Returnează un număr (de la 0 la 6) care indică ziua din săptămână în care cade valoarea furnizată.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Details

Returnează un număr (de la 0 la 6) care indică ziua din săptămână în care cade <code>dateTime</code> furnizată.  <ul>        <li><code>dateTime</code>: O valoare <code>date</code>, <code>datetime</code> sau <code>datetimezone</code>.</li>        <li><code>firstDayOfWeek</code>: O valoare <code>Day</code> care indică ziua care să fie considerată prima zi a săptămânii. Valorile permise sunt Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday sau Day.Saturday. Dacă este nespecificată, se utilizează o valoare implicită dependentă de cultură.</li>      </ul>


## Examples

### Example #1 
Obțineți ziua din săptămână reprezentată de luni 21 februarie 2011, tratând duminica drept prima zi a săptămânii.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2 
Obțineți ziua din săptămână reprezentată de luni 21 februarie 2011, tratând lunea drept prima zi a săptămânii.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
