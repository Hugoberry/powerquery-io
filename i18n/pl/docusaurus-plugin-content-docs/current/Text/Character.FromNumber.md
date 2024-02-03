---
title: Character.FromNumber
---

# Character.FromNumber


## Description

Konwertuje liczbę na znak tekstowy.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Details

Zwraca znak odpowiadający liczbie.<br />    <br />    Podany znak <code>number</code> powinien być 21-bitowym punktem kodu Unicode.


## Examples

### Example #1 
Konwertuj liczbę na odpowiadającą jej wartość znaku.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2 
Konwertuj znak na liczbę i na odwrót.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3 
Konwertuj szesnastkowy punkt kodu emotikonu „szeroko uśmiechniętej twarzy” na równoważną parę dwuskładnikową UTF-16.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
