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

Atgriež ievades <code>text</code> daļu starp norādītajiem elementiem <code>startDelimiter</code> un <code>endDelimiter</code>.    Neobligāta skaitliska vērtība <code>startIndex</code> norāda, kurš no elementiem <code>startDelimiter</code> ir jāņem vērā.    Neobligāts saraksts <code>startIndex</code> norāda, kurš no elementiem <code>startDelimiter</code> ir jāņem vērā, kā arī vai indeksēšana ir jāveic no ievades sākuma vai beigām.    Elements <code>endIndex</code> ir līdzīgs, izņemot to, ka indeksēšana tiek veikta attiecībā pret sarakstu <code>startIndex</code>.


## Examples

### Example #1 
Iegūt ievades “111 (222) 333 (444)” daļu starp (pirmo) atverošo iekavu un tai sekojošo (pirmo) aizverošo iekavu.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2 
Iegūt ievades “111 (222) 333 (444)” daļu starp otro atverošo iekavu un tai sekojošo pirmo aizverošo iekavu.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3 
Iegūt ievades “111 (222) 333 (444)” daļu starp otro atverošo iekavu no beigām un tai sekojošo otro aizverošo iekavu.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
