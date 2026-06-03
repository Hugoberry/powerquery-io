---
title: Currency.From
---

# Currency.From


Retourneert een valutawaarde van de opgegeven waarde.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Hiermee wordt een `currency`\-waarde geretourneerd vanuit de opgegeven `value`. Als de opgegeven waarde `value` `null` is, wordt door `Currency.From` de waarde `null` geretourneerd. Als de opgegeven `value` een `number` is binnen het valutabereik, wordt het fractionele deel van de `value` afgerond op vier decimalen en geretourneerd. Als `value` van een ander type is, wordt deze eerst geconverteerd naar een `number` met behulp van `Number.FromText`. Het geldige bereik voor valuta is `-922.337.203.685.477,5808` tot en met `922.337.203.685.477,5807`. Raadpleeg `Number.Round` voor de beschikbare afrondingsmodi; de standaardmodus is `RoundingMode.ToEven`. Er kan ook een optionele `culture` worden opgegeven (bijvoorbeeld: nl-NL).


## Examples

### Example #1
De`currency`\-waarde van `"1.23455"` ophalen.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
De `currency`\-waarde van `"1.23455"` ophalen met `RoundingMode.Down`.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
