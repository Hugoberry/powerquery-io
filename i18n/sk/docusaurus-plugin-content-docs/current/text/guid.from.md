---
title: Guid.From
---

# Guid.From


Vráti hodnotu GUID z danej hodnoty.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Remarks

Vráti hodnotu `Guid.Type` zo zadanej hodnoty `value`. Ak má zadaná hodnota `value` hodnotu `null`, `Guid.From` vráti hodnotu `null`. Vykoná sa kontrola, či je zadaná hodnota `value` v prijateľnom formáte. Prijateľné formáty sú uvedené v príkladoch.


## Examples

### Example #1
Identifikátor GUID sa môže zadať ako 32 súvislých šestnástkových číslic.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2
Identifikátor GUID sa môže zadať ako 32 šestnástkových číslic oddelených spojovníkmi do blokov 8-4-4-4-12.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3
Identifikátor GUID sa môže zadať ako 32 šestnástkových číslic oddelených spojovníkmi a uzavretých v zátvorkách.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4
Identifikátor GUID sa môže zadať ako 32 šestnástkových číslic oddelených spojovníkmi a uzavretých úvodzovkami.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
