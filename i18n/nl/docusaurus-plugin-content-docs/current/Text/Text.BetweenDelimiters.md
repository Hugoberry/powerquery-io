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

Hiermee wordt het gedeelte van <code>text</code> tussen een opgegeven <code>startDelimiter</code> en <code>endDelimiter</code> geretourneerd.    Een optioneel numeriek item <code>startIndex</code> geeft aan welk exemplaar van <code>startDelimiter</code> moet worden gebruikt.    Een optionele lijst <code>startIndex</code> geeft aan welk exemplaar van <code>startDelimiter</code> moet worden gebruikt en of indexering moet worden uitgevoerd vanaf het begin of het einde van de invoer.    <code>endIndex</code> is vergelijkbaar, behalve dat indexering relatief aan <code>startIndex</code> wordt uitgevoerd.


## Examples

### Example #1 
Het gedeelte van 111 (222) 333 (444) ophalen dat tussen het (eerste) open haakje en het (eerste) gesloten haakje dat erop volgt, staat.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2 
Het gedeelte van 111 (222) 333 (444) ophalen dat tussen het tweede open haakje en het eerste gesloten haakje dat erop volgt, staat.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3 
Het gedeelte van 111 (222) 333 (444) ophalen dat tussen het tweede open haakje vanaf het einde en het tweede gesloten haakje dat erop volgt, staat.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
