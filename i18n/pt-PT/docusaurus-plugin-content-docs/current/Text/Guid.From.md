---
title: Guid.From
---

# Guid.From


## Description

Devolve um valor de guid a partir do valor determinado.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Details

Devolve um valor de <code>Guid.Type</code> a partir do <code>value</code> especificado. Se o <code>value</code> especificado é <code>null</code>, <code>Guid.From</code> devolve <code>null</code>.  Será efetuada uma verificação para determinar se o fornecido <code>value</code> está num formato aceitável. Formatos aceitáveis fornecidos nos exemplos.


## Examples

### Example #1 
O Guid pode ser fornecido como 32 dígitos hexadecimais contíguos.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2 
O Guid pode ser fornecido como 32 dígitos hexadecimais separados por hífens em blocos de 8-4-4-4-12.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3 
O Guid pode ser fornecido como 32 dígitos hexadecimais separados por hífens e incluídos entre chavetas.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4 
O Guid pode ser fornecido como 32 dígitos hexadecimais separados por hífenes e entre parênteses.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
