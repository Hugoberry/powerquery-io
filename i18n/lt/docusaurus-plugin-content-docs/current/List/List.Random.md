---
title: List.Random
---

# List.Random


## Description

Pateikiamas atsitiktinių skaičių sąrašas.


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Details

Pateikiamas sąrašas atsitiktinių skaičių nuo 0 iki 1 su generuotinų reikšmių skaičiumi ir pasirenkama pradine reikšme.<ul>   <li><code>count</code>: generuotinų atsitiktinių reikšmių skaičius.</li>   <li><code>seed</code>:  <i>[Pasirenkama]</i> skaitinė reikšmė, naudojama atsitiktinių skaičių generatoriaus pradinėms reikšmėms įtraukti. Jei praleista, kaskart iškviečiant funkciją sugeneruojamas unikalus atsitiktinių skaičių sąrašas. Jei nurodote pradinę reikšmę su skaičiumi, kiekvieną kartą iškviečiant funkciją sugeneruojamas tas pats atsitiktinių skaičių sąrašas.</li></ul>


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
