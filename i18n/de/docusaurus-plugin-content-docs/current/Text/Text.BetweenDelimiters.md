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

Gibt den Teil von "<code>text</code>" zwischen der Angabe von "<code>startDelimiter</code>" und "<code>endDelimiter</code>" zurück.    Ein optionaler numerischer Wert <code>startIndex</code> gibt an, welches Vorkommen von "<code>startDelimiter</code>" berücksichtigt werden soll.    Ein optionaler Listenwert "<code>startIndex</code>" gibt an, welches Vorkommen von "<code>startDelimiter</code>" berücksichtigt werden soll. Außerdem wird angegeben, ob die Indizierung vom Beginn oder vom Ende der Eingabe aus erfolgen soll.    "<code>endIndex</code>" ist ähnlich, die Indizierung erfolgt hier jedoch relativ zu "<code>startIndex</code>".


## Examples

### Example #1 
Hiermit wird der Teil &#34;111 (222) 333 (444)&#34; zwischen der (ersten) öffnenden Klammer und der folgenden (zweiten) schließenden Klammer abgerufen.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2 
Hiermit wird der Teil &#34;111 (222) 333 (444)&#34; zwischen der zweiten öffnenden Klammer und der folgenden ersten schließenden Klammer abgerufen.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3 
Hiermit wird der Teil &#34;111 (222) 333 (444)&#34; zwischen der vom Ende aus gesehen zweiten öffnenden Klammer und der folgenden zweiten schließenden Klammer abgerufen.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
