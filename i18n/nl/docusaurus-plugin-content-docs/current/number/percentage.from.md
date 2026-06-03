---
title: Percentage.From
---

# Percentage.From


Hiermee wordt een percentagewaarde geretourneerd voor een opgegeven waarde.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Hiermee wordt een `percentage`\-waarde geretourneerd voor de opgegeven `value`. Als de opgegeven `value` `null` is, wordt door `Percentage.From` `null` geretourneerd. Als een opgegeven `value` een `text`\-waarde met een navolgend procentteken heeft, wordt het geconverteerde decimale getal geretourneerd. Anders wordt de waarde geconverteerd naar een `nummer` met behulp van `Number.From`. Er kan ook een optionele `culture` worden opgegeven (bijvoorbeeld: nl-NL).


## Examples

### Example #1
De waarde `percentage` ophalen uit `"12.3%"`.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
