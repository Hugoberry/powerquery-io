---
title: List.MinN
---

# List.MinN


## Description

Pateikiama (-os) mažiausia (-ios) sąrašo reikšmė (-ės). Gali būti nurodomas pateiktinų reikšmių skaičius arba filtravimo sąlyga.


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

Pateikiamos mažiausios sąrašo reikšmės (<code>list</code>).    Parametras <code>countOrCondition</code> nurodo pateiktinų reikšmių skaičių arba filtravimo sąlygą. Pasirenkamas parametras <code>comparisonCriteria</code> nurodo, kaip palyginti sąrašo reikšmes. <ul>        <li> <code>list</code>: reikšmių sąrašas.</li>        <li> <code>countOrCondition</code>:  jei nurodytas skaičius, didėjimo tvarka pateikiamas sąrašas, kurį sudaro iki <code>countOrCondition</code> elementų. Jei nurodyta sąlyga, pateikiamas sąrašas elementų, kurie iš pradžių atitiko sąlygą. Jei elementas neatitinka sąlygos, į tolesnius elementus neatsižvelgiama. Jei šis parametras neapibrėžtas, pateikiama viena mažiausia sąrašo reikšmė.</li><li><code>comparisonCriteria</code>: <i>[Pasirenkama]</i> Pasirenkama <code>comparisonCriteria</code> reikšmė gali būti nurodyta norint nustatyti, kaip palyginti sąrašo elementus. Jei šis parametras neapibrėžtas, naudojama numatytoji lyginimo funkcija. </li></ul>


## Examples

### Example #1 
Raskite 5 mažiausias reikšmes sąraše &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt;.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
