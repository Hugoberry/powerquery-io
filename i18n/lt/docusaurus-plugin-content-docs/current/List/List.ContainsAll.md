---
title: List.ContainsAll
---

# List.ContainsAll


## Description

Nurodoma, ar sąraše yra visos kito sąrašo reikšmės.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Nurodoma, ar sąraše <code>list</code> yra visos kito sąrašo reikšmės, <code>values</code>.    Jei reikšmė sąraše surandama, pateikiama Teisinga, kitu atveju – Klaidinga. Pasirenkama lygties kriterijų reikšmė, <code>equationCriteria</code>, gali būti nurodyta norint valdyti lygybės bandymą. 


## Examples

### Example #1 
Sužinokite, ar sąraše \{1, 2, 3, 4, 5} yra 3 ir 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
Sužinokite, ar sąraše \{1, 2, 3, 4, 5} yra 5 ir 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
