---
title: Character.ToNumber
---

# Character.ToNumber


## Description

Převede znak na číselnou hodnotu.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Details

Vrátí číselný ekvivalent <code>character</code>.<br />    <br />    Výsledkem bude 21bitový bod kódu Unicode reprezentovaný zadaným znakem nebo náhradním párem.  


## Examples

### Example #1 
Převede znak na jeho ekvivalentní číselnou hodnotu.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2 
Převeďte náhradní pár UTF-16 emotikony „šklebící se tvář“ na odpovídající šestnáctkový bod kódu.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
