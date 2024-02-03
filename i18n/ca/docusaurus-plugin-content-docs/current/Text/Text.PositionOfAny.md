---
title: Text.PositionOfAny
---

# Text.PositionOfAny


## Description

Retorna la primera posició del valor de text de qualsevol caràcter de la llista (-1 si no es troba).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Details

Retorna la primera posició de qualsevol dels caràcters de la llista <code>characters</code> que es trobi a <code>text</code>.
    Es pot utilitzar un paràmetre opcional <code>occurrence</code> per especificar quina posició d'aparició cal retornar.


## Examples

### Example #1 
Troba la primera posició de &#34;W&#34; o &#34;H&#34; al text &#34;Hello, World!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2 
Troba la posició de &#34;W&#34; o &#34;H&#34; al text &#34;Hello, World!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
