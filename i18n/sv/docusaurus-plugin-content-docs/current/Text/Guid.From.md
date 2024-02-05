---
title: Guid.From
---

# Guid.From


## Description

Returnerar ett GUID-värde från det givna värdet.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Details

Returnerar ett <code>Guid.Type</code>-värde från angivna <code>value</code>. Om det angivna <code>value</code> är <code>null</code>, så returnerar<code>Guid.From</code> <code>null</code>. En kontroll utförs för att avgöra om det angivna <code>value</code> har ett acceptabelt format. Acceptabla format anges i exemplen.


## Examples

### Example #1 
GUID-värdet kan anges som 32 sammanhängande hexadecimala siffror.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2 
GUID-värdet kan anges som 32 hexadecimaltal avgränsade med bindestreck i block i mönstret 8-4-4-4-12.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3 
GUID-värdet kan anges som 32 hexadecimaltal avgränsade med bindestreck och omgivna av klammerparenteser.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4 
GUID-värdet kan anges som 32 hexadecimaltal avgränsade med bindestreck och omgivna av parenteser.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
