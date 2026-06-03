---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


Zwraca wartość określonej zmiennej lub wartość domyślną, jeśli zmienna nie jest zdefiniowana.


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

Zwraca wartość określonej zmiennej `identifier` zdefiniowanej przez bieżące środowisko oceny. Jeśli zmienna nie jest zdefiniowana, zwracana jest wartość opcjonalna `defaultValue`.



## Category
Values.Implementation
