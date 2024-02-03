---
title: Guid.From
---

# Guid.From


## Description

Hiermee wordt een guid-waarde geretourneerd voor een opgegeven waarde.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Details

Hiermee wordt een <code>Guid.Type</code>-waarde geretourneerd van de opgegeven <code>value</code>. Als de opgegeven <code>value</code> <code>null</code> is, retourneert <code>Guid.From</code> de waarde <code>null</code>. Er wordt een controle uitgevoerd om te bepalen of de opgegeven <code>value</code> een acceptabele indeling heeft. Acceptabele indelingen zijn opgegeven in de voorbeelden.


## Examples

### Example #1 
De Guid kan worden opgegeven met 32 aaneengesloten hexadecimale cijfers.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2 
De Guid kan worden opgegeven met 32 hexadecimale cijfers, gescheiden door afbreekstreepjes in blokken van 8-4-4-4-12.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3 
De Guid kan worden opgegeven met 32 hexadecimale cijfers gescheiden door afbreekstreepjes en tussen accolades.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4 
De Guid kan worden opgegeven met 32 hexadecimale cijfers gescheiden door afbreekstreepjes en tussen haakjes.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
