---
title: Text.From
---

# Text.From


## Description

Iš nurodytos reikšmės sukuriama tekstinė reikšmė.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Details

Pateikiama tekstinė <code>value</code> pateiktis. <code>value</code> gali būti <code>number</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>datetimezone</code>, <code>logical</code>, <code>duration</code> arba <code>binary</code> reikšmė.    Jei pateikta reikšmė yra null, <code>Text.From</code> pateikia null. Taip pat gali būti pateiktas pasirinktinis <code>culture</code> (pavyzdžiui, „en-US“).


## Examples

### Example #1 
Sukurkite tekstinę reikšmę iš skaičiaus 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
