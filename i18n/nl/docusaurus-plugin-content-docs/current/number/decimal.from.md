---
title: Decimal.From
---

# Decimal.From


Maakt een waarde voor Decimaal van de opgegeven waarde.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Hiermee wordt een Decimale `number`\-waarde geretourneerd vanuit de opgegeven `value`. Als de opgegeven `value` de waarde `null` heeft, wordt door `Decimal.From` de waarde `null` geretourneerd. Als de opgegeven `value` een `number`\-waarde heeft binnen het bereik van Decimal, wordt `value` geretourneerd. In andere gevallen wordt een fout geretourneerd. Als `value` van een ander type is, wordt deze eerst geconverteerd naar een `number` met behulp van `Number.FromText`. Er kan ook een optionele `culture` worden opgegeven (bijvoorbeeld: nl-NL).


## Examples

### Example #1
De `number`\-waarde voor Decimaal uit `"4.5"` ophalen.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
