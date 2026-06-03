---
title: Value.Type
---

# Value.Type


Returnerar typen för det angivna värdet.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

Returnerar typen för det angivna värdet.

-   `value`: Värdet vars typ returneras.


## Examples

### Example #1
Returnera typen för det angivna talet.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
Returnerar typen för det angivna datumet.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
Returnerar den angivna postens typ.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
