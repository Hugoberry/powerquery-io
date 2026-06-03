---
title: Guid.From
---

# Guid.From


Devuelve un valor GUID a partir de un valor determinado.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Remarks

Devuelve un valor `Guid.Type` a partir del valor `value` proporcionado. Si dicho valor, `value`, es `null`, `Guid.From` devuelve `null`. Se llevará a cabo una comprobación para determinar si el valor `value` tiene un formato aceptable. Los formatos aceptables se proporcionan en los ejemplos.


## Examples

### Example #1
El GUID se puede proporcionar con 32 dígitos hexadecimales contiguos.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2
El GUID se puede proporcionar con 32 dígitos hexadecimales separados por guiones en bloques de 8-4-4-4-12.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3
El GUID se puede proporcionar con 32 dígitos hexadecimales separados por guiones y entre llaves.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4
El GUID se puede proporcionar con 32 dígitos hexadecimales separados por guiones y entre paréntesis.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
