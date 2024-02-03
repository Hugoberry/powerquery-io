---
title: Character.FromNumber
---

# Character.FromNumber


## Description

Konvertuje broj u tekstualni znak.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Details

Vraća znak koji je ekvivalent broja.<br />    <br />    Navedeni <code>number</code> treba da bude 21-bitna Unicode kodna tačka.


## Examples

### Example #1 
Konvertujte broj u njegovu ekvivalentnu vrednost znaka.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2 
Konvertujte znak u broj i ponovo nazad.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3 
Konvertujte heksadecimalnu tačku koda za emotikon „cerekanje lica“ u svoj ekvivalentni UTF-16 zamenski par.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
