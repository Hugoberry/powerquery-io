---
title: Character.ToNumber
---

# Character.ToNumber


Konvertuje znak na číselnú hodnotu.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Remarks

Vráti číselný ekvivalent znaku `character`.  
  
Výsledkom bude 21-bitový bod kódu Unicode reprezentovaný zadaným znakom alebo náhradným párom.


## Examples

### Example #1
Konvertuje znak na jeho ekvivalentnú číselnú hodnotu.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2
Konvertujte náhradný pár UTF-16 emotikonu „škeriaca sa tvár“ na ekvivalentný šestnástkový bod kódu.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
