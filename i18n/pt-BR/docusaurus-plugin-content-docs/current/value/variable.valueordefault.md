---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


Retorna o valor da variável especificada ou o valor padrão se a variável não estiver definida.


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

Retorna o valor da variável especificada `identifier` definida pelo ambiente de avaliação atual. Se a variável não estiver definida, a opcional `defaultValue` será retornada.



## Category
Values.Implementation
