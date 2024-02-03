---
title: Guid.From
---

# Guid.From


## Description

Returnerer en GUID-værdi ud fra den givne værdi.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Details

Returnerer en værdi af typen <code>Guid.Type</code> fra den angivne <code>value</code>. Hvis den angivne <code>value</code> er <code>null</code>, returnerer <code>Guid.From</code> <code>null</code>.  Der udføres en kontrol for at afgøre, om den angivne <code>value</code> er i et acceptabelt format. Acceptable formater angivet i eksemplerne.


## Examples

### Example #1 
GUID&#39;et kan leveres som 32 sammenhængende hexadecimale cifre.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2 
GUID&#39;et kan leveres som 32 hexadecimale cifre adskilt af bindestreger i blokke med 8-4-4-4-12.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3 
GUID&#39;et kan leveres som 32 hexadecimale cifre adskilt af bindestreger og stå i klammeparenteser.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4 
GUID&#39;et kan leveres som 32 hexadecimale cifre adskilt af bindestreger og omsluttet af parenteser.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
