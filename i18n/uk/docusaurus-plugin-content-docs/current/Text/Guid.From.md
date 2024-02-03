---
title: Guid.From
---

# Guid.From


## Description

Повертає значення GUID для заданого значення.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Details

Повертає значення типу <code>Guid.Type</code> для заданого значення "<code>value</code>". Якщо значення "<code>value</code>" задано як <code>null</code>, функція <code>Guid.From</code> повертає <code>null</code>. Система перевірятиме, чи значення "<code>value</code>" задано в прийнятному форматі. Прийнятні формати наведено в прикладах.


## Examples

### Example #1 
GUID можна надавати як 32 шістнадцяткові цифри без роздільників.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2 
GUID можна надавати як 32 шістнадцяткові цифри, розділені дефісами на блоки 8-4-4-4-12.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3 
GUID можна надавати як 32 шістнадцяткові цифри, розділені дефісами та взяті у фігурні дужки.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4 
GUID можна надавати як 32 шістнадцяткові цифри, розділені дефісами та взяті в дужки.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
