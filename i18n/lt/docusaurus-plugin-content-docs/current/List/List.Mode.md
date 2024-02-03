---
title: List.Mode
---

# List.Mode


## Description

Pateikiama dažniausia sąrašo reikšmė.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Details

Pateikiamas elementas, kuris sąraše pasirodo dažniausiai, <code>list</code>. Jei sąrašas tuščias, pateikiama išimtis. Jei yra keli elementai, kurių maksimalus dažnumas yra toks pats, rodomas paskutinysis.    Pasirenkama <code>comparisonCriteria</code> reikšmė, <code>equationCriteria</code>, gali būti nurodyta norint valdyti lygiateisiškumo bandymą. 


## Examples

### Example #1 
Raskite elementą, kuris sąraše rodomas dažniausiai, &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2 
Raskite elementą, kuris sąraše pasirodo dažniausiai, &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
