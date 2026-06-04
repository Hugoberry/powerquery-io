---
title: Value.Is
---

# Value.Is


Determină dacă o valoare este compatibilă cu tipul specificat.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Remarks

Determină dacă o valoare este compatibilă cu tipul specificat. Acest lucru este echivalent cu operatorul „is” din M, cu excepția că poate accepta referințe de tip identificator, cum ar fi Number. Type.


## Examples

### Example #1
Comparați două modalități de a determina dacă un număr este compatibil cu numărul de tip.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
