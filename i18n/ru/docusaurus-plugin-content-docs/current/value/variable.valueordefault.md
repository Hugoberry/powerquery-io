---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


Возвращает значение указанной переменной или значение по умолчанию, если переменная не определена.


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

Возвращает значение указанной переменной `identifier`, определенной в текущей среде выполнения. Если переменная не определена, будет возвращено необязательное значение `defaultValue`.



## Category
Values.Implementation
