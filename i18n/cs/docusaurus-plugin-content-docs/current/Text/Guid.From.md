---
title: Guid.From
---

# Guid.From


## Description

Vrátí hodnotu GUID ze zadané hodnoty.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Details

Vrátí hodnotu <code>Guid.Type</code> z dané <code>value</code>. Pokud dané <code>value</code> je <code>null</code>, <code>Guid.From</code> vrátí <code>null</code>.  Bude provedena kontrola, jestli je dané <code>value</code> v přijatelném formátu. Přípustné formáty jsou uvedeny v příkladech.


## Examples

### Example #1 
Identifikátor Guid lze zadat jako 32 šestnáctkových číslic bez mezer.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2 
Identifikátor Guid lze zadat jako 32 šestnáctkových číslic oddělených spojovníky na bloky 8-4-4-4-12.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3 
Identifikátor Guid lze zadat jako 32 šestnáctkových číslic oddělených spojovníky a uzavřených v závorkách.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4 
Identifikátor Guid lze zadat jako 32 šestnáctkových číslic oddělených spojovníky a uzavřených v uvozovkách.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
