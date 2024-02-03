---
title: List.ContainsAny
---

# List.ContainsAny


## Description

Nurodoma, ar sąraše yra kokių nors kito sąrašo reikšmių.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Nurodoma, ar sąraše <code>list</code> yra kokių nors kito sąrašo reikšmių, <code>values</code>.        Jei reikšmė sąraše surandama, pateikiama Teisinga, kitu atveju – Klaidinga. Pasirenkama lygties kriterijų reikšmė, <code>equationCriteria</code>, gali būti nurodyta norint valdyti lygybės bandymą. 


## Examples

### Example #1 
Sužinokite, ar sąraše \{1, 2, 3, 4, 5} yra 3 arba 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
Sužinokite, ar sąraše \{1, 2, 3, 4, 5} yra 6 arba 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
