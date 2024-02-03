---
title: Guid.From
---

# Guid.From


## Description

Pateikiama nurodytos reikšmės Guid reikšmė.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Details

Pateikiama <code>Guid.Type</code> reikšmė iš nurodytos <code>value</code> reikšmės. Jei nurodyta <code>value</code> reikšmė yra <code>null</code>, <code>Guid.From</code> pateikia <code>null</code>. Bus tikrinama, ar nurodyta <code>value</code> reikšmė yra priimtino formato. Priimtini formatai nurodyti pavyzdžiuose.


## Examples

### Example #1 
Guid reikšmė gali būti pateikta kaip 32 susiję šešioliktainiai skaitmenys.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2 
Guid reikšmė gali būti pateikta kaip 32 šešioliktainiai skaitmenys, brūkšneliais suskirstyti į 8-4-4-4-12 blokus.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3 
Guid reikšmė gali būti pateikta kaip 32 šešioliktainiai skaitmenys, atskirti brūkšneliais ir riestiniais skliaustais.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4 
Guid reikšmė gali būti pateikta kaip 32 šešioliktainiai skaitmenys, atskirti brūkšneliais ir lenktiniais skliaustais.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
