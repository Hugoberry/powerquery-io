---
title: Text.PositionOf
---

# Text.PositionOf


Retorna a primeira posição do valor (- 1 se ela não for encontrada).


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

Retorna a posição da ocorrência especificada do valor de texto `substring` encontrado em `text`. Um parâmetro opcional `occurrence` pode ser usado para especificar qual posição de ocorrência retornar (primeira ocorrência por padrão). Retorna -1 se `substring` não for encontrado.

`comparer` é um `Comparer` que é usado para controlar a comparação. Os comparadores podem ser usados ​​para fornecer comparações sem diferenciar maiúsculas de minúsculas ou com reconhecimento de cultura e localidade.

Os seguintes comparadores internos estão disponíveis na linguagem da fórmula:

-   `Comparer.Ordinal`: usado para realizar uma comparação ordinal exata
-   `Comparer.OrdinalIgnoreCase`: usado para realizar uma comparação ordinal exata sem diferenciar maiúsculas de minúsculas
-   `Comparer.FromCulture`: usado para realizar uma comparação com reconhecimento de cultura


## Examples

### Example #1
Obtenha a posição da primeira ocorrência de "Mundo" no texto "Olá, Mundo! Olá, Mundo!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
Obtenha a posição da última ocorrência de "Mundo" em "Olá, Mundo! Olá, Mundo!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
