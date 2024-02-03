---
title: Character.ToNumber
---

# Character.ToNumber


## Description

Konvertuje znak u brojčanu vrednost.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Details

Vraća broj ekvivalent od <code>character</code>.<br />    <br />    Rezultat će biti 21-bitna Unicode tačka koda predstavljena navedenim znakom ili zamenskim parom.  


## Examples

### Example #1 
Konvertujte znak u njegovu ekvivalentnu brojčanu vrednost.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2 
Konvertujte UTF-16 zamenski par za emotikon „cerekanje lica“ u odgovarajuću heksadecimalnu tačku koda.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
