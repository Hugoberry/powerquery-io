---
title: Int32.From
---

# Int32.From


Maakt een 32-bits geheel getal van de opgegeven waarde.


## Syntax

```powerquery
Int32.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Hiermee wordt een 32-bits `number`\-waarde geretourneerd als geheel getal vanuit de opgegeven `value`. Als de opgegeven waarde `value` `null` is, wordt door `Int32.From` de waarde `null` geretourneerd. Als de opgegeven `value` een `number` is binnen het bereik van een 32-bits geheel getal zonder een fractioneel deel, wordt `value` geretourneerd. Als het cijfer een fractioneel deel heeft, wordt het afgerond volgens de opgegeven afrondingsmodus. De standaardafrondingsmodus is `RoundingMode.ToEven`. Als `value` van een ander type is, wordt deze eerst geconverteerd naar een `nummer` met behulp van `Number.FromText`. Raadpleeg `Number.Round` voor de beschikbare afrondingsmodi. Er kan ook een optionele `culture` worden opgegeven (bijvoorbeeld: nl-NL).


## Examples

### Example #1
De 32-bits `number`\-waarde als geheel getal uit `"4"` ophalen.
```powerquery
Int32.From("4")
```

Result: 
```powerquery
4
```


### Example #2
De 32-bits `number`\-waarde als geheel getal uit `"4.5"` ophalen met `RoundingMode.AwayFromZero`.
```powerquery
Int32.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
