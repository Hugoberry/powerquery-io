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

Palauttaa kohteen <code>text</code> osan määritettyjen kohteiden <code>startDelimiter</code> ja <code>endDelimiter</code> välillä.    Valinnainen luku <code>startIndex</code> ilmaisee, mitä kohteen <code>startDelimiter</code> esiintymää tulee käsitellä.    Valinnainen luettelo <code>startIndex</code> ilmaisee, mitä kohteen <code>startDelimiter</code> esiintymää tulee käsitellä, sekä pitääkö indeksointi tehdä syötteen alusta vai lopusta.    <code>endIndex</code> on samanlainen lukuun ottamatta sitä, että indeksointi tehdään suhteellisena kohteeseen <code>startIndex</code>.


## Examples

### Example #1 
Hae kohteen 111 (222) 333 (444) osa (ensimmäisen) avaavan sulkumerkin ja sen jälkeen olevan (ensimmäisen) sulkevan sulkumerkin välillä.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2 
Hae kohteen 111 (222) 333 (444) osa toisen avaavan sulkumerkin ja sen jälkeen olevan ensimmäisen sulkevan sulkumerkin välillä.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3 
Hae kohteen 111 (222) 333 (444) osa toisen avaavan sulkumerkin lopusta ja sen jälkeen olevan toisen sulkevan sulkumerkin välillä.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
