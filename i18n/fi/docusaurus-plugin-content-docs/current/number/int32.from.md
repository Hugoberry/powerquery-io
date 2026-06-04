---
title: Int32.From
---

# Int32.From


Luo 32-bittisen kokonaisluvun annetusta arvosta.


## Syntax

```powerquery
Int32.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Palauttaa 32-bittisen kokonaislukumuotoisen `number`\-arvon annetusta kohteesta `value`. Jos annettu `value` on `null`\-tyhjäarvo, `Int32.From` palauttaa arvon `null`. Jos annettu `value` on `number`, joka on 32-bittisen kokonaisluvun alueella ilman murtolukuosaa, palautetaan `value`. Jos sillä on murtolukuosa, luku pyöristetään käyttäen määritettyä pyöristystilaa. Oletuspyöristystila on `RoundingMode.ToEven`. Jos annettu `value` on mitä tahansa muuta tyyppiä, käytetään `Number.FromText` sen muuntamiseen `number`\-arvoksi. Jos haluat tietoja käytettävissä olevista pyöristystiloista, katso `Number.Round`. Valinnainen `culture` voidaan myös antaa (esimerkiksi en-US).


## Examples

### Example #1
Hanki kohteen `"4"` 32-bittinen kokonaislukumuotoinen `number`\-arvo.
```powerquery
Int32.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Hanki kohteen `"4.5"` 32-bittinen kokonaislukumuotoinen `number`\-arvo käyttämällä kohdetta `RoundingMode.AwayFromZero`.
```powerquery
Int32.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
