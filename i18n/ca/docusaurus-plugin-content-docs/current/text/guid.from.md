---
title: Guid.From
---

# Guid.From


Ofereix com a resultat un valor GUID a partir del valor indicat.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Remarks

Ofereix com a resultat un valor `Guid.Type` a partir del valor `value`. Si `value` és `null`, `Guid.From` ofereix `null` com a resultat. Es durà a terme una comprovació per determinar si el valor `value` té un format acceptable. Els formats acceptables es proporcionen als exemples.


## Examples

### Example #1
El GUID es pot proporcionar amb 32 dígits hexadecimals consecutius.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2
El GUID es pot proporcionar amb 32 dígits hexadecimals separats per guionets en blocs de 8-4-4-4-12.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3
El GUID es pot proporcionar amb 32 dígits hexadecimals separats per guionets i entre claus.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4
El GUID es pot proporcionar amb 32 dígits hexadecimals separats per guionets i entre parèntesis.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
