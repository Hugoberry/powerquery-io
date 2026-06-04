---
title: Value.Type
---

# Value.Type


Vrátí typ předané hodnoty.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

Vrátí typ dané hodnoty.

-   `value`: Hodnota, jejíž typ je vrácen


## Examples

### Example #1
Vrátí typ zadaného čísla.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
Vrátí typ zadaného data.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
Vrátí typ zadaného záznamu.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
