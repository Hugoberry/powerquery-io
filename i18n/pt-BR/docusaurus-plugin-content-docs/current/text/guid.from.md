---
title: Guid.From
---

# Guid.From


Retorna um valor de GUID de um determinado valor.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Remarks

Retorna um valor de `Guid.Type` do `value` determinado. Se o `value` determinado for `null`, o `Guid.From` retornará `null`. Será executada uma verificação para determinar se o `value` determinado está em um formato aceitável. Formatos aceitáveis fornecidos nos exemplos.


## Examples

### Example #1
A GUID pode ser fornecida como 32 dígitos hexadecimais contíguos.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2
A GUID pode ser fornecida como 32 dígitos hexadecimais separados por hífen em blocos de 8-4-4-4-12.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3
A GUID pode ser fornecida como 32 dígitos hexadecimais separados por hífen e delimitados por chaves.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4
A GUID pode ser fornecida como 32 dígitos hexadecimais separados por hífen e delimitados por parênteses.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
