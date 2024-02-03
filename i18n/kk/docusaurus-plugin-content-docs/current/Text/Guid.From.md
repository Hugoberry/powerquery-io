---
title: Guid.From
---

# Guid.From


## Description

Берілген мәннен GUID мәнін қайтарады.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Details

Берілген <code>value</code> арқылы <code>Guid.Type</code> мәнін қайтарады. Егер берілген <code>value</code> <code>null</code> болса, <code>Guid.From</code> <code>null</code> мәнін қайтарады. Берілген <code>value</code> пішімі қаншалықты жарамды екенін анықтау үшін тексеріс жүргізіледі. Жарамды пішімдер мысалдарда берілген.


## Examples

### Example #1 
GUID идентификаторын 32 үздіксіз оналтылық цифр түрінде беруге болады.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2 
GUID идентификаторын 8-4-4-4-12 блоктарына сызықшалар арқылы бөлінген 32 оналтылық цифр түрінде беруге болады.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3 
GUID идентификаторын сызықшалармен бөлінген және фигуралық жақшаға алынған 32 оналтылық цифр түрінде беруге болады.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4 
GUID идентификаторын сызықшалармен бөлінген және дөңгелек жақшаға алынған 32 оналтылық цифр түрінде беруге болады.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
