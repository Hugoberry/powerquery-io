---
title: Value.Type
---

# Value.Type


Vrne vrsto dane vrednosti.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

Vrne tip dane vrednosti.

-   `value`: Vrednost vrnjenega tipa.


## Examples

### Example #1
Vrni tip navedenega števila.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
Vrni tip navedenega datuma.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
Vrni tip navedenega zapisa.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
