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

Hiermee wordt het gedeelte van `text` na een opgegeven `delimiter` geretourneerd. Een optioneel numeriek item `index` geeft aan welk exemplaar van `delimiter` moet worden gebruikt. Een optionele lijst `index` geeft aan welk exemplaar van `delimiter` moet worden gebruikt en of indexering moet worden uitgevoerd vanaf het begin of het einde van de invoer.


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
