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

Returnerer andelen af <code>text</code> mellem den angivne <code>startDelimiter</code> og <code>endDelimiter</code>.    En valgfri numerisk værdi, <code>startIndex</code>, angiver, hvilken forekomst af <code>startDelimiter</code> der skal tages i betragtning.    En valgfri liste, <code>startIndex</code>, angiver, hvilken forekomst af <code>startDelimiter</code> der skal tages i betragtning, samt om indeksering skal foretages fra starten eller slutningen af inputtet.    <code>endIndex</code> er tilsvarende, bortset fra, at indekseringen foretages i forhold til <code>startIndex</code>.


## Examples

### Example #1 
Hent andelen af &#34;111 (222) 333 (444)&#34; mellem den første (åbne) parentes og den (første) lukkede parentes, der følger efter.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2 
Hent andelen af &#34;111 (222) 333 (444)&#34; mellem den anden åbne parentes og den første lukkede parentes, der følger efter.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3 
Hent andelen af &#34;111 (222) 333 (444)&#34; mellem den anden åbne parentes regnet fra slutningen og den første lukkede parentes, der følger efter.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
