---
title: Value.As
---

# Value.As


## Description

Returnează valoarea dacă este compatibilă cu tipul specificat.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Details

Returnează valoarea dacă este compatibilă cu tipul specificat. Acesta este echivalent cu operatorul „as” din M, cu excepția faptului că poate accepta referințe de tip identificator, cum ar fi Number.Type.


## Examples

### Example #1 
Distribuiți un număr la un număr.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
Încercați să transformați o valoare text într-un număr.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
