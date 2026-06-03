---
title: Text.PositionOfAny
---

# Text.PositionOfAny


Retorna a primeira posição no valor de texto de qualquer caractere listado (- 1 se ela não for encontrada).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Remarks

Retorna a primeira posição de qualquer caractere na lista `characters` encontrada em `text`. Um parâmetro opcional `occurrence` pode ser usado para especificar qual posição de ocorrência retornar.


## Examples

### Example #1
Localize a posição do "M" ou do "O" no texto "Olá, Mundo!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2
Localize todas as posições do "M" ou do "O" no texto "Olá, Mundo!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
