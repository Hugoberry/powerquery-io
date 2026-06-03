---
title: Text.StartsWith
---

# Text.StartsWith


Indica se o texto começa com um valor especificado.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Retorna verdadeiro se o valor de texto `text` começar com o valor de texto `substring`.

-   `text`: um valor `text` que deve ser pesquisado.
-   `substring`: um valor `text` que é a substring de caracteres a ser pesquisada no `text`.
-   `comparer`: *(Opcional)* Um `Comparer` usado para controlar a comparação. Por exemplo, `Comparer.OrdinalIgnoreCase` pode ser usado para realizar pesquisas que não diferenciam maiúsculas de minúsculas.

`comparer` é um `Comparador` usado para controlar a comparação. Os comparadores podem ser usados para fornecer comparações sem distinção entre maiúsculas e minúsculas ou com reconhecimento de cultura e localidade.

Os seguintes comparadores internos estão disponíveis na linguagem da fórmula:

-   `Comparer.Ordinal`: Usado para realizar uma comparação ordinal exata.
-   `Comparer.OrdinalIgnoreCase`: Usado para executar uma comparação ordinal exata sem distinção entre maiúsculas e minúsculas.
-   `Comparer.FromCulture`: Usado para realizar uma comparação com reconhecimento de cultura.


## Examples

### Example #1
Verifique se o texto "Olá, Mundo" começa com o texto "olá".
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
Verifique se o texto "Olá, Mundo" começa com o texto "Olá".
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
Ignorando maiúsculas e minúsculas, verifique se o texto 'Olá, Mundo' começa com o texto 'olá'.
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
