---
title: Text.PositionOfAny
---

# Text.PositionOfAny


Devolve a primeira posição de qualquer caráter listado no valor de texto (-1 se não for encontrado).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Remarks

Devolve a primeira posição de qualquer caráter na lista `characters` que se encontra em `text`. Um parâmetro opcional `occurrence` pode ser utilizado para especificar a posição de ocorrência a devolver.


## Examples

### Example #1
Encontrar a primeira posição de "W" ou "H" no texto "Hello, World!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2
Encontrar todas as posições de "W" ou "H" no texto "Hello, World!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
