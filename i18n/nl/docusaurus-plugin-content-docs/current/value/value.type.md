---
title: Value.Type
---

# Value.Type


Retourneert het type van de opgegeven waarde.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

Retourneert het type van de opgegeven waarde.

-   `value`: de waarde waarvan het type wordt geretourneerd.


## Examples

### Example #1
Retourneer het type van het opgegeven getal.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
Retourneer het type van de opgegeven datum.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
Retourneer het type van het opgegeven record.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
