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

Pateikiama <code>text</code> dalis tarp nurodytų <code>startDelimiter</code> ir <code>endDelimiter</code>.    Pasirenkamas skaitinis <code>startIndex</code> parodo, į kurį <code>startDelimiter</code> atvejį reikia atsižvelgti.    Pasirenkamas sąrašas <code>startIndex</code> parodo, į kurį <code>startDelimiter</code> atvejį reikia atsižvelgti ir ar indeksavimą reikia atlikti nuo įvesties pradžios ar galo.    <code>endIndex</code> yra panašus, išskyrus tai, kad indeksavimas atliekamas pagal <code>startIndex</code>.


## Examples

### Example #1 
Gauti 111 (222) 333 (444) dalį tarp (pirmojo) atidarymo skliaustelio ir (pirmojo) po jo esančio uždarymo skliaustelio.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2 
Gauti 111 (222) 333 (444) dalį tarp antrojo atidarymo skliaustelio ir pirmojo po jo esančio uždarymo skliaustelio.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3 
Gauti 111 (222) 333 (444) dalį tarp antrojo atidarymo skliaustelio nuo galo ir antrojo po jo esančio uždarymo skliaustelio.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
