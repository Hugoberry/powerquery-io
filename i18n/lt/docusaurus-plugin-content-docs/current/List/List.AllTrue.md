---
title: List.AllTrue
---

# List.AllTrue


## Description

Jei visos išraiškos teisingos, pateikiama reikšmė Teisinga.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Details

Jei visos sąrašo išraiškos <code>list</code> teisingos, pateikiama reikšmė Teisinga.


## Examples

### Example #1 
Nustatyti, ar visos sąrašo išraiškos \{true, true, 2 &gt; 0} yra teisingos.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
Nustatyti, ar visos sąrašo išraiškos \{true, true, 2 &lt; 0} yra teisingos.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
