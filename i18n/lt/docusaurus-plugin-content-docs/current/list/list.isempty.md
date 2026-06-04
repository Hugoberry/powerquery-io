---
title: List.IsEmpty
---

# List.IsEmpty


Jei sąrašas tuščias, pateikiama Teisinga.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Remarks

Pateikiama `true`, jei sąraše, `list`, nėra reikšmių (ilgis – 0). Jei sąraše yra reikšmių (ilgis > 0), pateikiama `false`.


## Examples

### Example #1
Sužinokite, ar sąrašas \{\} tuščias.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2
Sužinokite, ar sąrašas \{1, 2\} tuščias.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
