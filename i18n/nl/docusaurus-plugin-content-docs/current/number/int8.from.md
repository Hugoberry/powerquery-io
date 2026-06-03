---
title: Int8.From
---

# Int8.From


Maakt een 8-bits geheel getal met teken van de opgegeven waarde.


## Syntax

```powerquery
Int8.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Hiermee wordt een ondertekende 8-bits `number`\-waarde geretourneerd als geheel getal met teken uit opgegeven `value`. Als de opgegeven `value` de waarde `null` heeft, wordt door `Int8.From` de waarde `null` geretourneerd. Als de opgegeven `value` een `number`\-waarde heeft binnen het bereik van een ondertekend 8-bits geheel getal met teken zonder een fractioneel deel, wordt `value` geretourneerd. Als het getal een fractioneel deel heeft, wordt het afgerond met de opgegeven afrondingsmodus. De standaardafrondingsmodus is `RoundingMode.ToEven`. Als `value` van een ander type is, wordt deze eerst geconverteerd naar een `nummer` met behulp van `Number.FromText`. Raadpleeg `Number.Round` voor de beschikbare afrondingsmodi. Er kan ook een optionele `culture` worden opgegeven (bijvoorbeeld: nl-NL).


## Examples

### Example #1
De 8-bits `number`\-waarde als geheel getal met teken uit `"4"` ophalen.
```powerquery
Int8.From("4")
```

Result: 
```powerquery
4
```


### Example #2
De 8-bits `number`\-waarde als geheel getal met teken uit `"4.5"` ophalen met `RoundingMode.AwayFromZero`.
```powerquery
Int8.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
