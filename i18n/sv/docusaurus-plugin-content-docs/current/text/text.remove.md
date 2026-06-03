---
title: Text.Remove
---

# Text.Remove


Tar bort alla förekomster av det angivna tecknet eller listan med tecken från indatatextvärdet.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Remarks

Returnerar en kopia av textvärdet `text` där alla tecken från `removeChars` har tagits bort.


## Examples

### Example #1
Ta bort tecknen "," och ";" från textvärdet.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
