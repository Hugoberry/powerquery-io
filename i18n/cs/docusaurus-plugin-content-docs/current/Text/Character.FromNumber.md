---
title: Character.FromNumber
---

# Character.FromNumber


## Description

Převede číslo na textový znak.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Details

Vrátí znakový ekvivalent funkce number.<br />    <br />    Poskytnutý <code>number</code> by měl být 21bitový bod kódu Unicode.


## Examples

### Example #1 
Převede číslo na jeho odpovídající hodnotu znaku.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2 
Umožňuje převést znak na číslo a znovu ho převést zpět.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3 
Převeďte šestnáctkový bod kódu emotikony „šklebící se tvář“ na ekvivalentní náhradní pár UTF-16.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
