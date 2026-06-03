---
title: Value.Type
---

# Value.Type


Returnerer typen af den angivne værdi.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

Returnerer typen af den angivne værdi.

-   `value`: Den værdi, hvis type returneres.


## Examples

### Example #1
Returner typen af det angivne tal.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
Returner typen af den angivne dato.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
Returner typen af den angivne post.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
