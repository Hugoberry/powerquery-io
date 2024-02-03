---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


## Description

Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Details

Hiermee wordt het gedeelte van <code>text</code> voor een opgegeven <code>delimiter</code> geretourneerd.    Een optioneel numeriek item <code>index</code> geeft aan welk exemplaar van <code>delimiter</code> moet worden gebruikt.    Een optionele lijst <code>index</code> geeft aan welk exemplaar van <code>delimiter</code> moet worden gebruikt en of indexering moet worden uitgevoerd vanaf het begin of het einde van de invoer.


## Examples

### Example #1 
Het gedeelte van 111-222-333 ophalen dat voor het (eerste) afbreekstreepje staat.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2 
Het gedeelte van 111-222-333 ophalen dat voor het tweede afbreekstreepje staat.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3 
Het gedeelte van 111-222-333 ophalen dat voor het tweede afbreekstreepje vanaf het einde staat.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
