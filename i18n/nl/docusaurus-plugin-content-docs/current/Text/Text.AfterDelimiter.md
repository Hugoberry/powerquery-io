---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


## Description

Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Details

Hiermee wordt het gedeelte van <code>text</code> na een opgegeven <code>delimiter</code> geretourneerd.    Een optioneel numeriek item <code>index</code> geeft aan welk exemplaar van <code>delimiter</code> moet worden gebruikt.    Een optionele lijst <code>index</code> geeft aan welk exemplaar van <code>delimiter</code> moet worden gebruikt en of indexering moet worden uitgevoerd vanaf het begin of het einde van de invoer.


## Examples

### Example #1 
Het gedeelte van 111-222-333 ophalen dat na het (eerste) afbreekstreepje staat.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2 
Het gedeelte van 111-222-333 ophalen dat na het tweede afbreekstreepje staat.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3 
Het gedeelte van 111-222-333 ophalen dat na het tweede afbreekstreepje vanaf het einde staat.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
