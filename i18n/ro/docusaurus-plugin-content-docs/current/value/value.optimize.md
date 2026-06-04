---
title: Value.Optimize
---

# Value.Optimize


Semnalează către Value.Expression să returneze expresia optimizată pentru o valoare.


## Syntax

```powerquery
Value.Optimize(
    value as any
) as any
```


## Remarks

Când se utilizează în cadrul Value.Expression, dacă `value` reprezintă o interogare care poate fi optimizată, această funcție indică faptul că expresia optimizată trebuie returnată. În caz contrar, `value` va fi transmis fără niciun efect.



## Category
Expression
