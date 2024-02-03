---
title: Value.Is
---

# Value.Is


## Description

Determina se um valor é compatível com o tipo especificado.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Details

Determina se um valor é compatível com o tipo especificado. Isso é equivalente ao operador "is" em M, com a exceção de que pode aceitar referências de tipo de identificador, como Number.Type.


## Examples

### Example #1 
Compare duas maneiras de determinar se um número é compatível com o número do tipo.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
