---
title: Text.Range
---

# Text.Range


## Description

Tiek atgriezta apakšvirkne, kas tika atrasta nobīdē.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Atgriež apakšvirkni no teksta <code>text</code>, kas atrasta nobīdē <code>offset</code>.    Var ietvert neobligātu parametru <code>count</code>, lai norādītu, cik rakstzīmju jāatgriež. Ja nav pietiekami daudz rakstzīmju, tiek parādīta kļūda.


## Examples

### Example #1 
Atrodiet apakšvirkni no teksta Hello World, kas sākas 6. indeksā.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
Atrodiet apakšvirkni no teksta Hello World Hello, kas sākas 6. indeksā un kuras diapazons ir 5 rakstzīmes.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
