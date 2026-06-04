---
title: Text.Range
---

# Text.Range


Retorna la subcadena que s'ha trobat al desplaçament.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Retorna la subcadena del text `text` que s'ha trobat al desplaçament `offset`. Es pot incloure un paràmetre opcional, `count`, per especificar quants caràcters s'han de retornar. Es produeix un error si no hi ha prou caràcters.


## Examples

### Example #1
Troba la subcadena del text "Hello World" començant per l'índex 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2
Troba la subcadena del text "Hello World Hello" començant per l'índex 6 amb un abast de 5 caràcters.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
