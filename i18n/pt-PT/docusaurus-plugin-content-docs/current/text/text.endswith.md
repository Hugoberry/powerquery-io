---
title: Text.EndsWith
---

# Text.EndsWith


Indica se o texto termina no valor especificado.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Indica se o texto especificado, `text`, termina com o valor especificado, `substring`. A indicação é sensível a maiúsculas e minúsculas.

`comparer`é um `Comparer` que é utilizado no controlo da comparação. Os comparadores podem ser utilizados para fornecer comparações não sensíveis a maiúsculas/minúsculas ou baseadas na cultura ou na região.

Os comparadores incorporados seguintes estão disponíveis na linguagem da fórmula:

-   `Comparer.Ordinal`: utilizado para executar uma comparação ordinal exata
-   `Comparer.OrdinalIgnoreCase`: utilizado para executar uma comparação ordinal exata não sensível a maiúsculas/minúsculas
-   `Comparer.FromCulture`: utilizado para executar uma comparação baseada na cultura


## Examples

### Example #1
Verificar se "Olá, Mundo" termina com "mundo".
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
Verificar se "Olá, Mundo" termina com "Mundo".
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
