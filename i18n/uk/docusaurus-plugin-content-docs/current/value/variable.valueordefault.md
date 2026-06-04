---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


Повертає значення вказаної змінної або стандартне значення, якщо змінну не визначено.


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

Повертає значення вказаної змінної `identifier`, визначене поточним середовищем обчислення. Якщо змінну не визначено, повертається необовʼязкове значення `defaultValue`.



## Category
Values.Implementation
