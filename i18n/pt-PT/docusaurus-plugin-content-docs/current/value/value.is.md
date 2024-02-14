---
title: Value.Is
---

# Value.Is


Determina se um valor é compatível com o tipo especificado.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Remarks

Determina se um valor é compatível com o tipo especificado. Isto é equivalente ao operador "is" em M, com a exceção de que pode aceitar referências de tipo de identificador, tais como Number.Type.


## Examples

### Example #1 
Compare duas formas de determinar se um número é compatível com o tipo &#34;número&#34;.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
