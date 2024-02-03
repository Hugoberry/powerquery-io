---
title: List.AnyTrue
---

# List.AnyTrue


## Description

Jei bet kuri išraiška teisinga, pateikiama reikšmė Teisinga.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Details

Jei bet kuri sąrašo išraiška <code>list</code> teisinga, pateikiama reikšmė Teisinga.


## Examples

### Example #1 
Nustatyti, ar kuri nors iš sąrašo išraiškų \{true, false, 2 &gt; 0} yra teisinga.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
Nustatyti, ar kuri nors iš sąrašo išraiškų \{2 = 0, false, 2 &lt; 0} yra teisinga.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
