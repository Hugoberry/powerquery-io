---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Retorna la porció de `text` després del valor `delimiter` especificat. Un valor numèric opcional `index` indica la freqüència del valor `delimiter` que s'ha de tenir en compte. Una llista opcional `index` indica la freqüència del valor `delimiter` que s'ha de tenir en compte, i també si la indexació s'ha de fer des de l'inici o des del final de l'entrada.


## Examples

### Example #1
Permet obtenir la porció d'"111-222-333" després del primer guionet.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2
Permet obtenir la porció d'"111-222-333" després del segon guionet.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3
Permet obtenir la porció d'"111-222-333" després del segon guionet del final.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
