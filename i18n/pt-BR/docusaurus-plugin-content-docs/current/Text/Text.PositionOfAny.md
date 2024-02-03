---
title: Text.PositionOfAny
---

# Text.PositionOfAny


## Description

Retorna a primeira posição no valor de texto de qualquer caractere listado (- 1 se ela não for encontrada).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Details

Retorna a primeira posição de qualquer caractere na lista <code>characters</code> encontrada em <code>text</code>.
    Um parâmetro opcional <code>occurrence</code> pode ser usado para especificar qual posição de ocorrência retornar.


## Examples

### Example #1 
Localize a posição do &#34;M&#34; ou do &#34;O&#34; no texto &#34;Olá, Mundo!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2 
Localize todas as posições do &#34;M&#34; ou do &#34;O&#34; no texto &#34;Olá, Mundo!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
