---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


Hiermee wordt een functie geretourneerd die tekst in een lijst met tekst splitst volgens een overgang van het ene type teken naar het andere. De parameters \{0} en \{1} kunnen een lijst met tekens zijn of een functie die een teken verwerkt en waar/onwaar retourneert.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Remarks

Hiermee wordt een functie geretourneerd die tekst in een lijst met tekst splitst volgens een overgang van het ene type teken naar het andere. De parameters <code>before</code> en <code>after</code> kunnen een lijst met tekens zijn of een functie die een teken verwerkt en waar/onwaar retourneert.


## Examples

### Example #1 
Splits de invoer wanneer een hoofdletter of kleine letter wordt gevolgd door een cijfer.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
