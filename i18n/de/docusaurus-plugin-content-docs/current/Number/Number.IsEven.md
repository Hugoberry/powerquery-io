---
title: Number.IsEven
---

# Number.IsEven


Gibt an, ob es sich um einen geraden Wert handelt.


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Remarks

Gibt an, ob es sich bei dem Wert "<code>number</code>" um einen geraden Wert handelt (<code>true</code>) oder nicht (<code>false</code>).


## Examples

### Example #1 
Überprüft, ob 625 eine gerade Zahl ist.
```powerquery
Number.IsEven(625)
```

Result: 
```powerquery
false
```


### Example #2 
Überprüft, ob 82 eine gerade Zahl ist.
```powerquery
Number.IsEven(82)
```

Result: 
```powerquery
true
```




## Category
Number.Information
