---
title: Value.Type
---

# Value.Type


Verilen değerin türünü döndürür.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

Verilen değerin türünü döndürür.

-   `value`: Türü döndürülen değer.


## Examples

### Example #1
Belirtilen sayının türünü döndür.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
Belirtilen tarihin türünü döndür.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
Belirtilen kaydın türünü döndür.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
