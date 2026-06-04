---
title: Text.End
---

# Text.End


Vráti posledné znaky textu.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Vráti hodnotu `text`, ktorú tvoria posledné znaky v počte: `count` hodnoty `text` `text`.


## Examples

### Example #1
Získajte posledných 5 znakov textu "Hello, World".
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
