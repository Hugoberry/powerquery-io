---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


Gibt den Wert der angegebenen Variable oder den Standardwert zurück, wenn die Variable nicht definiert ist.


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

Gibt den Wert der angegebenen Variablen `identifier` zurück, die von der aktuellen Auswertungsumgebung definiert ist. Wenn die Variable nicht definiert ist, wird der optionale `defaultValue`\-Wert zurückgegeben.



## Category
Values.Implementation
