---
title: Value.Is
---

# Value.Is


## Description

Nosaka, vai vērtība ir saderīga ar norādīto tipu.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Details

Nosaka, vai vērtība ir saderīga ar norādīto tipu. Tas ir ekvivalents "is" operatoram opcijā M, izņemot to, ka tas var akceptēt identifikatora tipu atsauces, piemēram, Number.Type.


## Examples

### Example #1 
Salīdziniet divus veidus, kā noteikt, vai skaitlis ir saderīgs ar tipa skaitli.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
