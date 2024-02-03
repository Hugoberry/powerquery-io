---
title: Text.PositionOfAny
---

# Text.PositionOfAny


## Description

Devolve a primeira posición do valor de texto de calquera carácter listado (-1 se non se localiza).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Details

Devolve a primeira posición de calquera carácter da lista <code>characters</code> que se atopa en <code>text</code>.
     Pódese utilizar un parámetro opcional <code>occurrence</code> para especificar a posición de ocorrencia que se devolverá.


## Examples

### Example #1 
Buscar a primeira posición de &#34;O&#34; ou &#34;M&#34; no texto &#34;Ola, Mundo!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2 
Buscar todas as posicións de &#34;O&#34; ou &#34;M&#34; no texto &#34;Ola, Mundo!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
