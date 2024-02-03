---
title: List.Contains
---

# List.Contains


## Description

Nurodoma, ar sąraše yra reikšmė.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Details

Nurodoma, ar sąraše <code>list</code> yra reikšmė <code>value</code>.    Jei reikšmė sąraše surandama, pateikiama true, kitu atveju – false. Norint valdyti lygybės bandymą, gali būti nurodyta pasirenkama lygties kriterijų reikšmė <code>equationCriteria</code>. 


## Examples

### Example #1 
Sužinokite, ar sąraše \{1, 2, 3, 4, 5} yra 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
Sužinokite, ar sąraše \{1, 2, 3, 4, 5} yra 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
