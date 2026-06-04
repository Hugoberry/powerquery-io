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

Atgriež ievades `text` daļu starp norādītajiem elementiem `startDelimiter` un `endDelimiter`. Neobligāta skaitliska vērtība `startIndex` norāda, kurš no elementiem `startDelimiter` ir jāņem vērā. Neobligāts saraksts `startIndex` norāda, kurš no elementiem `startDelimiter` ir jāņem vērā, kā arī vai indeksēšana ir jāveic no ievades sākuma vai beigām. Elements `endIndex` ir līdzīgs, izņemot to, ka indeksēšana tiek veikta attiecībā pret sarakstu `startIndex`.


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
