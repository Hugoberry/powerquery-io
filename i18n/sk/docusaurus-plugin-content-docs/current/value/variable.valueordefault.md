---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


Vráti hodnotu zadanej premennej, alebo predvolenú hodnotu, ak premenná nie je definovaná.


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

Vráti hodnotu zadanej premennej `identifier`, ktorá je definovaná aktuálnym prostredím hodnotenia. Ak premenná nie je definovaná, vráti sa voliteľná hodnota `defaultValue`.



## Category
Values.Implementation
