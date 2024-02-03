---
title: Value.As
---

# Value.As


## Description

Vrátí hodnotu, pokud je kompatibilní se zadaným typem.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Details

Vrátí hodnotu, pokud je kompatibilní se zadaným typem. Toto je ekvivalent operátoru as v M s výjimkou toho, že může přijímat odkazy na typ identifikátoru, třeba Number.Type.


## Examples

### Example #1 
Přetypování čísla na číslo.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
Pokus o přetypování textové hodnoty na číslo.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
