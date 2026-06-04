---
title: List.IsEmpty
---

# List.IsEmpty


Igaz értéket ad vissza, ha üres a lista.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Remarks

`true` értéket ad, ha a(z) `list` lista nem tartalmaz értéket (tehát a lista hossza 0). Ha a lista tartalmaz értéket (tehát a lista hossza > 0), a függvény `false` értéket ad.


## Examples

### Example #1
Annak eldöntése, hogy a \{\} lista üres-e
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2
Annak eldöntése, hogy az \{1, 2\} lista üres-e
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
