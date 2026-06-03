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

Devolve true se o valor de texto `text` começar com o valor de texto `substring`.

-   `text`: um valor `text` no qual será efetuada a procura.
-   `substring`: um valor `text` que é a subcadeia a procurar em `text`.
-   `comparer`: *(opcional)* um `Comparer` utilizado para controlar a comparação. Por exemplo, `Comparer.OrdinalIgnoreCase` poderá ser utilizado para efetuar procuras não sensíveis às maiúsculas e minúsculas.

`comparer` é um `Comparer` utilizado para controlar a comparação. Os comparadores poderão ser utilizados para fornecer comparações não sensíveis às maiúsculas e minúsculas ou sensíveis à cultura e à região.

Os comparadores incorporados seguintes estão disponíveis na linguagem de fórmulas:

-   `Comparer.Ordinal`: utilizado para efetuar uma comparação ordinal exata.
-   `Comparer.OrdinalIgnoreCase`: utilizado para efetuar uma comparação ordinal exata não sensível às maiúsculas e minúsculas.
-   `Comparer.FromCulture`: utilizado para efetuar uma comparação sensível à cultura.


## Examples

### Example #1
Verificar se o texto "Olá, Mundo" começa com o texto "olá".
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
Verificar se o texto "Olá, Mundo" começa com o texto "Olá".
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
A ignorar a utilização de maiúsculas/minúsculas; verifique se o texto "Hello, World" começa com o texto "hello".
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
