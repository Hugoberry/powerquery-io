---
title: Guid.From
---

# Guid.From


## Description

Retourne une valeur GUID de la valeur donnée.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Details

Retourne une valeur <code>Guid.Type</code> du <code>value</code> donné. Si le <code>value</code> donné est <code>null</code>, <code>Guid.From</code> retourne <code>null</code>. Une vérification est effectuée pour déterminer si le <code>value</code> donné est dans un format acceptable. Les formats acceptables sont fournis dans les exemples.


## Examples

### Example #1 
Le GUID peut être fourni sous forme de 32 chiffres hexadécimaux contigus.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2 
Le GUID peut être fourni sous forme de 32 chiffres hexadécimaux séparés par des traits d&#39;union en blocs de 8-4-4-4-12.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3 
Le GUID peut être fourni sous forme de 32 chiffres hexadécimaux séparés par des traits d&#39;union et placés entre accolades.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4 
Le GUID peut être fourni sous forme de 32 chiffres hexadécimaux séparés par des traits d&#39;union et placés entre parenthèses.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
