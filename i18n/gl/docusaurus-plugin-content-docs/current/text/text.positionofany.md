---
title: Text.PositionOfAny
---

# Text.PositionOfAny


Devolve a primeira posición do valor de texto de calquera carácter listado (-1 se non se localiza).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Remarks

Devolve a primeira posición de calquera carácter da lista `characters` que se atopa en `text`. Pódese utilizar un parámetro opcional `occurrence` para especificar a posición de ocorrencia que se devolverá.


## Examples

### Example #1
Buscar a primeira posición de "O" ou "M" no texto "Ola, Mundo!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2
Buscar todas as posicións de "O" ou "M" no texto "Ola, Mundo!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
