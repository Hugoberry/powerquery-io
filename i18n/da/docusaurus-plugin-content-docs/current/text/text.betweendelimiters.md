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

Returnerer andelen af `text` mellem den angivne `startDelimiter` og `endDelimiter`. En valgfri numerisk værdi, `startIndex`, angiver, hvilken forekomst af `startDelimiter` der skal tages i betragtning. En valgfri liste, `startIndex`, angiver, hvilken forekomst af `startDelimiter` der skal tages i betragtning, samt om indeksering skal foretages fra starten eller slutningen af inputtet. `endIndex` er tilsvarende, bortset fra, at indekseringen foretages i forhold til `startIndex`.


## Examples

### Example #1
Hent andelen af "111 (222) 333 (444)" mellem den første (åbne) parentes og den (første) lukkede parentes, der følger efter.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2
Hent andelen af "111 (222) 333 (444)" mellem den anden åbne parentes og den første lukkede parentes, der følger efter.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3
Hent andelen af "111 (222) 333 (444)" mellem den anden åbne parentes regnet fra slutningen og den første lukkede parentes, der følger efter.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
