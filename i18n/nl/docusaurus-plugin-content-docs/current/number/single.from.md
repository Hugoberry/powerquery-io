---
title: Single.From
---

# Single.From


Maakt een waarde voor Enkel van de opgegeven waarde.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Hiermee wordt een Single `number`\-waarde geretourneerd vanuit de opgegeven `value`. Als de opgegeven `value` de waarde `null` heeft, wordt door `Single.From` de waarde `null` geretourneerd. Als de opgegeven `value` een `number`\-waarde heeft binnen het bereik van Single, wordt `value` geretourneerd. In andere gevallen wordt een fout geretourneerd. Als `value` van een ander type is, wordt deze eerst geconverteerd naar een `number` met behulp van `Number.FromText`. Er kan ook een optionele `culture` worden opgegeven (bijvoorbeeld: nl-NL).


## Examples

### Example #1
De `number`\-waarde voor Enkel uit `"1.5"` ophalen.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
