---
title: Double.From
---

# Double.From


Maakt een waarde voor Dubbel van de opgegeven waarde.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Hiermee wordt een Double `number`\-waarde geretourneerd vanuit de opgegeven `value`. Als de opgegeven `value` de waarde `null` heeft, wordt door `Double.From` de waarde `null` geretourneerd. Als de opgegeven `value` een `number`\-waarde heeft binnen het bereik van Double, wordt `value` geretourneerd. In andere gevallen wordt een fout geretourneerd. Als `value` van een ander type is, wordt deze eerst geconverteerd naar een `number` met behulp van `Number.FromText`. Er kan ook een optionele `culture` worden opgegeven (bijvoorbeeld: nl-NL).


## Examples

### Example #1
De `number`\-waarde voor Dubbel uit `"4"` ophalen.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
