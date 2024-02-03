---
title: List.Modes
---

# List.Modes


## Description

Pateikiamas dažniausių sąrašo reikšmių sąrašas.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Pateikiamas elementas, kuris sąraše pasirodo dažniausiai, <code>list</code>. Jei sąrašas tuščias, pateikiama išimtis. Jei yra keli elementai, kurių maksimalus dažnumas yra toks pats, rodomas paskutinysis.    Pasirenkama <code>comparisonCriteria</code> reikšmė, <code>equationCriteria</code>, gali būti nurodyta norint valdyti lygiateisiškumo bandymą. 


## Examples

### Example #1 
Raskite elementus, kurie sąraše rodomi dažniausiai, &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
