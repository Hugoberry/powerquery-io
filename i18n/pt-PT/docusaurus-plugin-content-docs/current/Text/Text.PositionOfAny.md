---
title: Text.PositionOfAny
---

# Text.PositionOfAny


## Description

Devolve a primeira posição de qualquer caráter listado no valor de texto (-1 se não for encontrado).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Details

Devolve a primeira posição de qualquer caráter na lista <code>characters</code> que se encontra em <code>text</code>.    Um parâmetro opcional <code>occurrence</code> pode ser utilizado para especificar a posição de ocorrência a devolver.


## Examples

### Example #1 
Encontrar a primeira posição de &#34;W&#34; ou &#34;H&#34; no texto &#34;Hello, World!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2 
Encontrar todas as posições de &#34;W&#34; ou &#34;H&#34; no texto &#34;Hello, World!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
