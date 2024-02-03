---
title: Guid.From
---

# Guid.From


## Description

Atgriež dotās vērtības GUID vērtību.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Details

Atgriež <code>Guid.Type</code> vērtību atbilstoši dotajai vērtībai <code>value</code>. Ja dotā vērtība <code>value</code> ir <code>Null</code>, <code>Guid.From</code> atgriež <code>Null</code>.  Tiks veikta pārbaude, lai noskaidrotu, vai dotā vērtība <code>value</code> ir pieņemamā formātā. Piemēros ir norādīti pieņemami formāti.


## Examples

### Example #1 
Var norādīt GUID kā 32 blakusesošus heksadecimālciparus.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2 
Var norādīt GUID kā 32 heksadecimālciparus, kas ar defisēm sadalīti 8-4-4-4-12 ciparu blokos.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3 
Var norādīt GUID kā 32 blakusesošus heksadecimālciparus, kas atdalīti ar defisēm un iekļauti figūriekavās.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4 
Var norādīt GUID kā 32 blakusesošus heksadecimālciparus, kas atdalīti ar defisēm un iekļauti iekavās.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
