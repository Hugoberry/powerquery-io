---
title: List.SingleOrDefault
---

# List.SingleOrDefault


Vráti jedinú položku zoznamu pre zoznam s dĺžkou jeden a predvolenú hodnotu pre prázdny zoznam.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Remarks

Ak sa v zozname `list` nachádza iba jedna položka, vráti túto položku. Ak je zoznam prázdny, funkcia vráti hodnotu null, pokiaľ nie je stanovená voliteľná hodnota `default`. Ak sa v zozname nachádza viac ako jedna položka, funkcia vráti chybu.


## Examples

### Example #1
Nájdite jednu hodnotu v zozname \{1\}.
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2
Nájdite jednu hodnotu v zozname \{\}.
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3
Nájdite jednu hodnotu v zozname \{\}. Ak je zoznam prázdny, vráti sa hodnota –1.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
