---
title: Value.As
---

# Value.As


## Description

Palauttaa arvon, jos se on yhteensopiva määritetyn tyypin kanssa.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Details

Palauttaa arvon, jos se on yhteensopiva määritetyn tyypin kanssa. Tämä vastaa M:n as-operaattoria lukuun ottamatta sitä, että se voi hyväksyä tunnistetyyppiviittauksia, kuten Number.Type.


## Examples

### Example #1 
Luo luvun numeroon.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
Yritettiin lähettää tekstiarvo luvuksi.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
