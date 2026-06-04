---
title: Number.ToText
---

# Number.ToText


Pateiktą skaičių konvertuoja į tekstą.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Remarks

Konvertuoja skaitinę reikšmę `number` į tekstinę reikšmę pagal formatą, nurodytą `format`.  
  
Formatas yra tekstinė reikšmė, nurodanti, kaip skaičius turi būti konvertuojamas. Jei reikia daugiau informacijos apie palaikomas formato reikšmes, eikite į https://go.microsoft.com/fwlink/?linkid=2241210 ir https://go.microsoft.com/fwlink/?linkid=2240884.  
  
Taip pat gali būti pateiktas pasirinktinis `culture` (pvz., „en-US“), kad galėtumėte valdyti nuo kultūros priklausomą `format` veikimo būdą.


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
