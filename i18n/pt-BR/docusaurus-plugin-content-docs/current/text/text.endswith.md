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

Indica se o texto fornecido, `text`, termina com o valor especificado, `substring`. A indicação diferencia maiúsculas de minúsculas.

`comparer` é um `Comparer` que é usado para controlar a comparação. Os comparadores podem ser usados ​​para fornecer comparações sem diferenciar maiúsculas de minúsculas ou com reconhecimento de cultura e localidade.

Os seguintes comparadores internos estão disponíveis na linguagem da fórmula:

-   `Comparer.Ordinal`: usado para realizar uma comparação ordinal exata
-   `Comparer.OrdinalIgnoreCase`: usado para realizar uma comparação ordinal exata sem diferenciar maiúsculas de minúsculas
-   `Comparer.FromCulture`: usado para realizar uma comparação com reconhecimento de cultura


## Examples

### Example #1
Verifique se "Olá, Mundo" termina com "mundo".
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
Verifique se "Olá, Mundo" termina com "Mundo".
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
