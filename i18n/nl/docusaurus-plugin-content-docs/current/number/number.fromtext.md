---
title: Number.FromText
---

# Number.FromText


Maakt getallen van algemene tekstindelingen ("15", "3,423.10", "5.0E-10").


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Hiermee wordt een waarde voor `number` geretourneerd vanuit de opgegeven tekstwaarde, `text`.

-   `text`: de tekstweergave van een number-waarde. De weergave moet een gewone getalnotatie hebben, bijvoorbeeld 15, 3.423,10 of 5.0E-10.
-   `culture`: een optionele cultuur die bepaalt hoe `text` wordt geïnterpreteerd (bijvoorbeeld: nl-NL).


## Examples

### Example #1
De getalwaarde van `"4"` ophalen.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
De getalwaarde van `"5.0e-10"` ophalen.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
