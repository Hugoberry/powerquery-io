---
title: Value.Type
---

# Value.Type


Gibt den Typ des angegebenen Werts zurück.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

Gibt den Typ des angegebenen Werts zurück.

-   `value`: Der Wert, dessen Typ zurückgegeben wird.


## Examples

### Example #1
Gibt den Typ der angegebenen Zahl zurück.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
Gibt den Typ des angegebenen Datums zurück.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
Gibt den Typ des angegebenen Datensatzes zurück.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
