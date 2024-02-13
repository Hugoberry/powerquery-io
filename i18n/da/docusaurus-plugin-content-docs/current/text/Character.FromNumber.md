---
title: Character.FromNumber
---

# Character.FromNumber


Konverterer et tal til et teksttegn.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Remarks

Returnerer tegnækvivalenten til tallet.<br />    <br />    Den angivne <code>number</code> skal være et 21-bit Unicode-kodepunkt.


## Examples

### Example #1 
Konvertér et tal til dets tilsvarende tegnværdi.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2 
Konvertér et tegn til et tal og tilbage igen.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3 
Konvertér det heksadecimale kodepunkt for humørikonet &#34;grinende ansigt&#34; til det tilsvarende surrogatpar UTF-16.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
