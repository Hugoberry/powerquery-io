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

Pateikiama `text` dalis tarp nurodytų `startDelimiter` ir `endDelimiter`. Pasirenkamas skaitinis `startIndex` parodo, į kurį `startDelimiter` atvejį reikia atsižvelgti. Pasirenkamas sąrašas `startIndex` parodo, į kurį `startDelimiter` atvejį reikia atsižvelgti ir ar indeksavimą reikia atlikti nuo įvesties pradžios ar galo. `endIndex` yra panašus, išskyrus tai, kad indeksavimas atliekamas pagal `startIndex`.


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
