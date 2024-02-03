---
title: List.MaxN
---

# List.MaxN


## Description

Pateikiama (-os) didžiausia (-ios) sąrašo reikšmė (-ės). Turi būti nurodytas pateiktinų reikšmių skaičius arba filtravimo sąlyga.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

Pateikiamos didžiausios sąrašo reikšmės (<code>list</code>).    Kai eilutės surikiuojamos, gali būti nurodyti pasirinktiniai parametrai, skirti rezultatui toliau filtruoti. Pasirinktinis parametras <code>countOrCondition</code> nurodo pateiktinų reikšmių skaičių arba filtravimo sąlygą. Pasirenkamas parametras <code>comparisonCriteria</code> nurodo, kaip palyginti sąrašo reikšmes. <ul>        <li> <code>list</code>: reikšmių sąrašas.</li>        <li> <code>countOrCondition</code>:  jei nurodytas skaičius, didėjimo tvarka pateikiamas sąrašas, kurį sudaro iki <code>countOrCondition</code> elementų. Jei nurodyta sąlyga, pateikiamas sąrašas elementų, kurie iš pradžių atitiko sąlygą. Jei elementas neatitinka sąlygos, į tolesnius elementus neatsižvelgiama.</li><li><code>comparisonCriteria</code>: <i>[Pasirenkama]</i> Pasirenkama <code>comparisonCriteria</code> reikšmė gali būti nurodyta norint nustatyti, kaip palyginti sąrašo elementus. Jei šis parametras neapibrėžtas, naudojama numatytoji lyginimo funkcija. </li></ul>



## Category
List.Ordering
