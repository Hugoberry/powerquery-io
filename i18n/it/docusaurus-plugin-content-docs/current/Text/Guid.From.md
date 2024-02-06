---
title: Guid.From
---

# Guid.From


Restituisce un valore GUID dal valore specificato.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Remarks

Restituisce un valore <code>Guid.Type</code> dal valore <code>value</code> specificato. Se il valore <code>value</code> specificato è <code>null</code>, <code>Guid.From</code> restituisce <code>null</code>. Viene eseguito un controllo per determinare se il valore <code>value</code> specificato è in formato accettabile. I formati accettabili sono forniti negli esempi.


## Examples

### Example #1 
È possibile specificare il GUID sotto forma di 32 cifre esadecimali contigue.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2 
È possibile specificare il GUID sotto forma di 32 cifre esadecimali separate da trattini in blocchi di 8-4-4-4-12 cifre.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3 
È possibile specificare il GUID sotto forma di 32 cifre esadecimali separate da trattini e racchiuse tra parentesi graffe.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4 
È possibile specificare il GUID sotto forma di 32 cifre esadecimali separate da trattini e racchiuse tra parentesi.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
