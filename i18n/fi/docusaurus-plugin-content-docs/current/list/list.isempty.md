---
title: List.IsEmpty
---

# List.IsEmpty


Palauttaa arvon true, jos luettelo on tyhjä.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Remarks

Palauttaa arvon `true`, jos luettelo `list` ei sisällä arvoja (pituus on 0). Jos luettelo sisältää arvoja (pituus on suurempi kuin 0), palauttaa arvon `false`.


## Examples

### Example #1
Selvitä, onko luettelo \{\} tyhjä.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2
Selvitä, onko luettelo \{1, 2\} tyhjä.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
