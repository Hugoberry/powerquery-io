---
title: Value.As
---

# Value.As


## Description

Devolve o valor se for compatível com o tipo especificado.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Details

Devolve o valor se for compatível com o tipo especificado. Isto é equivalente ao operador "as" em M, com a exceção de que pode aceitar referências de tipo de identificador, tais como Number.Type.


## Examples

### Example #1 
Converter um número para um número.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
Tente converter um valor de texto para um número.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
