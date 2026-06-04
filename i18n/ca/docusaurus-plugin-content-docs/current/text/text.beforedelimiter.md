---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Retorna la porció de `text` abans del valor `delimiter` especificat. Un valor numèric opcional `index` indica la freqüència del valor `delimiter` que s'ha de tenir en compte. Una llista opcional `index` indica la freqüència del valor `delimiter` que s'ha de tenir en compte, i també si la indexació s'ha de fer des de l'inici o des del final de l'entrada.


## Examples

### Example #1
Permet obtenir la porció d'"111-222-333" abans del primer guionet.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2
Permet obtenir la porció d'"111-222-333" abans del segon guionet.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3
Permet obtenir la porció d'"111-222-333" abans del segon guionet del final.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
