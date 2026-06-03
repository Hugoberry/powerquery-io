---
title: Text.PositionOf
---

# Text.PositionOf


Devolve a primeira posição do valor (-1 se não for encontrado).


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Remarks

Devolve a posição da ocorrência especificada do valor de texto `substring` encontrado em `text`. É possível utilizar um parâmetro opcional `occurrence` para especificar a posição da ocorrência a devolver (primeira ocorrência por predefinição). Devolve -1 se `substring` não tiver sido encontrado.

`comparer` é um `Comparer` que é utilizado no controlo da comparação. Os comparadores podem ser utilizados para fornecer comparações não sensíveis a maiúsculas/minúsculas ou baseadas na cultura ou na região.

Os comparadores incorporados seguintes estão disponíveis na linguagem da fórmula:

-   `Comparer.Ordinal`: utilizado para executar uma comparação ordinal exata
-   `Comparer.OrdinalIgnoreCase`: utilizado para executar uma comparação ordinal exata não sensível a maiúsculas/minúsculas
-   `Comparer.FromCulture`: utilizado para executar uma comparação baseada na cultura


## Examples

### Example #1
Obter a posição da primeira ocorrência de "Mundo" no texto "Olá, Mundo! Olá, Mundo!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
Obter a posição da última ocorrência de "World" em "Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
