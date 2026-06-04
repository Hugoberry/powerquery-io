---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


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


## Remarks

Palauttaa kohteen `text` osan määritettyjen kohteiden `startDelimiter` ja `endDelimiter` välillä. Valinnainen luku `startIndex` ilmaisee, mitä kohteen `startDelimiter` esiintymää tulee käsitellä. Valinnainen luettelo `startIndex` ilmaisee, mitä kohteen `startDelimiter` esiintymää tulee käsitellä, sekä pitääkö indeksointi tehdä syötteen alusta vai lopusta. `endIndex` on samanlainen lukuun ottamatta sitä, että indeksointi tehdään suhteellisena kohteeseen `startIndex`.


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
