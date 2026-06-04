---
title: List.Random
---

# List.Random


Pateikiamas atsitiktinių skaičių sąrašas.


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Remarks

Pateikiamas atsitiktinių skaičių nuo 0 iki 1 sąrašas, atsižvelgiant į generuotinų reikšmių skaičių ir pasirinktinę pradinę reikšmę.

-   `count`: atsitiktinių generuojamų reikšmių skaičius.
-   `seed`: *(pasirinktinai)* Skaitinė reikšmė, naudojama atsitiktinių skaičių generatoriaus pradiniams elementams. Jei praleistas unikalus atsitiktinių skaičių sąrašas generuojamas kaskart, kai iškviečiate funkciją. Jei nurodysite pradinę reikšmę su skaičiumi, kiekvienas funkcijos iškvietimas sugeneruos tą patį atsitiktinių skaičių sąrašą.


## Examples

### Example #1
Sukurkite 3 atsitiktinių skaičių sąrašą.
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2
Sukurkite 3 atsitiktinių skaičių sąrašą nurodydami pradinę reikšmę.
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators
