---
title: Guid.From
---

# Guid.From


## Description

Returnează o valoare GUID din valoarea dată.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Details

Returnează o valoare <code>Guid.Type</code> din <code>value</code> dat. Dacă <code>value</code> dat este <code>null</code>, <code>Guid.From</code> returnează <code>null</code>.  Se va efectua o verificare pentru a se stabili dacă <code>value</code> dat este într-un format acceptabil. Formatele acceptabile sunt furnizate în exemple.


## Examples

### Example #1 
GUID-ul poate fi furnizat ca 32 de cifre hexazecimale contigue.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2 
GUID-ul poate fi furnizat ca 32 de cifre hexazecimale separate prin cratime în blocuri de 8-4-4-4-12.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3 
GUID-ul poate fi furnizat ca 32 de cifre hexazecimale separate prin cratime și incluse între acolade.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4 
GUID-ul poate fi furnizat ca 32 de cifre hexazecimale separate prin cratime și incluse între paranteze.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
