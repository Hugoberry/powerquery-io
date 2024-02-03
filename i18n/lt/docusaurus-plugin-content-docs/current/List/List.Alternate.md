---
title: List.Alternate
---

# List.Alternate


## Description

Pateikiamas sąrašas, sudarytas iš visų nelyginių sunumeruotų sąrašo poslinkio elementų.


## Syntax

```powerquery
List.Alternate(
    list as list,
    count as number,
    optional repeatInterval as number,
    optional offset as number
) as list
```


## Details

Pateikiamas sąrašas, sudarytas iš visų nelyginių sunumeruotų sąrašo poslinkio elementų. Kaitaliojama tarp sąrašo <code>list</code> reikšmių paėmimo ir praleidimo atsižvelgiant į parametrus.    <ul>    <li><code>count</code>: nurodomas kiekvieną kartą praleidžiamų reikšmių skaičius.</li>    <li><code>repeatInterval</code>: pasirinktinis kartojimo intervalas, rodantis, kiek reikšmių įtraukiama tarp praleistų reikšmių.</li>    <li><code>offset</code>: pasirinktinis poslinkio parametras, skirtas pradėti praleisti reikšmes ties pradiniu poslinkiu.</li>    </ul>


## Examples

### Example #1 
Sukurkite sąrašą iš \{1..10}, kuriame praleidžiamas pirmasis skaičius.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
Sukurkite sąrašą iš \{1..10}, kuriame praleidžiamas kas antras skaičius.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
Sukurkite sąrašą iš \{1..10}, kuris prasideda nuo 1 ir praleidžia kas antrą skaičių.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
Sukurkite sąrašą iš \{1..10}, kuris prasideda nuo 1, praleidžia vieną reikšmę, išlaiko dvi reikšmes ir t. t.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
