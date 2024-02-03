---
title: Character.FromNumber
---

# Character.FromNumber


## Description

Konvertuje číslo na textový znak.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Details

Vráti znakový ekvivalent čísla.<br />    <br />    Zadaný <code>number</code> by mal byť 21-bitový bod kódu Unicode.


## Examples

### Example #1 
Konvertuje číslo na jeho ekvivalentnú hodnotu znaku.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2 
Konvertuje znak na číslo a späť.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3 
Konvertujte šestnástkový bod kódu emotikonu „škeriaca sa tvár“ na ekvivalentný náhradný pár UTF-16.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
