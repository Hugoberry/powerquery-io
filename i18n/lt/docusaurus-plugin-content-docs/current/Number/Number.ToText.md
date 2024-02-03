---
title: Number.ToText
---

# Number.ToText


## Description

Pateiktą skaičių konvertuoja į tekstą.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Details

Konvertuoja skaitinę reikšmę <code>number</code> į tekstinę reikšmę pagal formatą, nurodytą <code>format</code>.<br />    <br />    Formatas yra tekstinė reikšmė, nurodanti, kaip skaičius turi būti konvertuojamas. Jei reikia daugiau informacijos apie palaikomas formato reikšmes, eikite į https://go.microsoft.com/fwlink/?linkid=2241210 ir https://go.microsoft.com/fwlink/?linkid=2240884.<br />    <br />    Taip pat gali būti pateiktas pasirinktinis <code>culture</code> (pvz., „en-US“), kad galėtumėte valdyti nuo kultūros priklausomą <code>format</code> veikimo būdą.


## Examples

### Example #1 
Konvertuoti skaičių į tekstą nenurodant formato.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2 
Konvertuoti skaičių į eksponentinį formatą.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
Konvertuoti skaičių į procentinės dalies formatą naudojant tik su vieną skaičių po kablelio.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
