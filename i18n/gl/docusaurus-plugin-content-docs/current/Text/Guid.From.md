---
title: Guid.From
---

# Guid.From


## Description

Devolve un valor de GUID do valor fornecido.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Details

Devolve un valor <code>Guid.Type</code> do valor <code>value</code> fornecido. Se o valor <code>value</code> fornecido é <code>null</code>, <code>Guid.From</code> devolve <code>null</code>. Realizarase unha comprobación para determinar se o valor <code>value</code> fornecido está nun formato aceptable. Os formatos aceptables fornécense nos exemplos.


## Examples

### Example #1 
O GUID pode fornecerse como 32 díxitos hexadecimais contiguos.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2 
O GUID pode fornecerse como 32 díxitos hexadecimais separados por guións en bloques de 8-4-4-4-12.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3 
O GUID pode fornecerse como 32 díxitos hexadecimais separados por guións e entre chaves.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4 
O GUID pode fornecerse como 32 díxitos hexadecimais separados por guións e entre parénteses.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
