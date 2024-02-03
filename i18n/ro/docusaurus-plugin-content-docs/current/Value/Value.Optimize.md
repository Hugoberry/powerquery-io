---
title: Value.Optimize
---

# Value.Optimize


## Description

Semnalează către Value.Expression să returneze expresia optimizată pentru o valoare.


## Syntax

```powerquery
Value.Optimize(
    value as any
) as any
```


## Details

Când se utilizează în cadrul Value.Expression, dacă <code>value</code> reprezintă o interogare care poate fi optimizată, această funcție indică faptul că expresia optimizată trebuie returnată. În caz contrar, <code>value</code> va fi transmis fără niciun efect.



## Category
Expression
