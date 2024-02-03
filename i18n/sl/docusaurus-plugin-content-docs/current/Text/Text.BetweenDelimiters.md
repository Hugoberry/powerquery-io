---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


## Description

Text.BetweenDelimiters


## Syntax

```powerquery
Text.BetweenDelimiters(
    text as text,
    startDelimiter as text,
    endDelimiter as text,
    optional startIndex as any,
    optional endIndex as any
) as any
```


## Details

Vrne del števila <code>text</code> med navedenima <code>startDelimiter</code> in <code>endDelimiter</code>.    Izbirna številska vrednost <code>startIndex</code> označuje, katero ponovitev števila <code>startDelimiter</code> je treba upoštevati.    Izbirni seznam <code>startIndex</code> označuje, katero ponovitev števila <code>startDelimiter</code> je treba upoštevati, in ali je treba indeksiranje izvesti od začetka ali konca vnosa.    <code>endIndex</code> je podobno, le da je indeksiranje izvedeno relativno glede na <code>startIndex</code>.


## Examples

### Example #1 
Pridobite del števila &#34;111 (222) 333 (444)&#34; med (prvim) oklepajem in (prvim) zaklepajem, ki mu sledi.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2 
Pridobite del števila &#34;111 (222) 333 (444)&#34; med drugim oklepajem od konca in prvim zaklepajem, ki mu sledi.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3 
Pridobite del števila &#34;111 (222) 333 (444)&#34; med drugim oklepajem od konca in drugim zaklepajem, ki mu sledi.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
