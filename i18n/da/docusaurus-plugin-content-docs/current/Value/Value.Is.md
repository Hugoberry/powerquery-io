---
title: Value.Is
---

# Value.Is


## Description

Bestemmer, om en værdi er kompatibel med den angivne type.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Details

Bestemmer, om en værdi er kompatibel med den angivne type. Dette svarer til operatoren "is" i M med undtagelse af, at det kan acceptere referencer for identifikator-type, f. eks. Number.Type.


## Examples

### Example #1 
Sammenlign to måder at bestemme, om et tal er kompatibelt med typetal.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
