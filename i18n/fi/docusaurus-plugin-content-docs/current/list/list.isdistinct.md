---
title: List.IsDistinct
---

# List.IsDistinct


Ilmaisee, onko luettelossa kaksoiskappaleita.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Palauttaa loogisen arvon siitä, onko luettelossa `list` kaksoiskappaleita. Palauttaa arvon `true`, jos luettelon arvot ovat erillisiä, ja arvon `false`, jos siinä on arvojen kaksoiskappaleita.


## Examples

### Example #1
Selvitä, onko luettelossa \{1, 2, 3\} vain erillisiä arvoja (eli siinä ei ole kaksoiskappaleita).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2
Selvitä, onko luettelossa \{1, 2, 3, 3\} vain erillisiä arvoja (eli siinä ei ole kaksoiskappaleita).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
