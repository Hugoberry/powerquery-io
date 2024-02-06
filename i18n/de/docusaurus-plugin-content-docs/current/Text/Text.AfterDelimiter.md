---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Gibt den Teil von "<code>text</code>" nach Angabe von "<code>delimiter</code>" zurück.    Ein optionaler numerischer Wert <code>index</code> gibt an, welches Vorkommen von "<code>delimiter</code>" berücksichtigt werden soll.    Ein optionaler Listenwert "<code>index</code>" gibt an, welches Vorkommen von "<code>delimiter</code>" berücksichtigt werden soll. Außerdem wird angegeben, ob die Indizierung vom Beginn oder vom Ende der Eingabe aus erfolgen soll.


## Examples

### Example #1 
Hiermit wird der Teil &#34;111-222-333&#34; nach dem (ersten) Bindestrich abgerufen.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2 
Hiermit wird der Teil &#34;111-222-333&#34; nach dem zweiten Bindestrich abgerufen.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3 
Hiermit wird der Teil &#34;111-222-333&#34; nach dem vom Ende aus gesehen zweiten Bindestrich abgerufen.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
