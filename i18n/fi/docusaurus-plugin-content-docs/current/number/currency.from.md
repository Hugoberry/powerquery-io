---
title: Currency.From
---

# Currency.From


Palauttaa currency-arvon annetusta arvosta.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Palauttaa `currency`\-arvon annetusta kohteesta `value`. Jos annettu `value` on `null`\-tyhjäarvo, `Currency.From` palauttaa arvon `null`. Jos annettu `value` on `number`, joka on currency-alueella, kohteen `value` murtolukuosa pyöristetään 4 desimaalia sisältäväksi luvuksi ja palautetaan. Jos annettu `value` on mitä tahansa muuta tyyppiä, käytetään `Number.FromText` sen muuntamiseen `number`\-arvoksiKelvollinen currency-alue on välillä `-922,337,203,685,477.5808` ja `922,337,203,685,477.5807`. Kohteessa `Number.Round` on tietoja käytettävissä olevista pyöristystiloista, oletusasetus on `RoundingMode.ToEven`. Valinnainen `culture` voidaan myös antaa (esimerkiksi en-US).


## Examples

### Example #1
Hanki kohteen `"1.23455"` `currency`\-arvo.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
Hanki kohteen `"1.23455"` `currency`\-arvo käyttämällä kohdetta `RoundingMode.Down`.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
