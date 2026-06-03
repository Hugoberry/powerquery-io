---
title: Text.Insert
---

# Text.Insert


Inserta un valor de texto en otro en una posición especificada.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Devuelve el resultado de insertar el valor de texto `newText` en el valor de texto `text` en la posición `offset`. Las posiciones empiezan en el número 0.


## Examples

### Example #1
Insertar "C" entre "B" y "D" en "ABD".
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
