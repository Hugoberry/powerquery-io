---
title: Int8.From
---

# Int8.From


Luo allekirjoitetun 8-bittisen kokonaisluvun annetusta arvosta.


## Syntax

```powerquery
Int8.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Palauttaa 8-bittisen kokonaislukumuotoisen `number`\-arvon annetusta kohteesta `value`. Jos annettu `value` on `null`\-tyhjäarvo, `Int8.From` palauttaa arvon `null`. Jos annettu `value` on `number`, joka on 8-bittisen kokonaisluvun alueella ilman murtolukuosaa, palautetaan `value`. Jos sillä on murtolukuosa, luku pyöristetään käyttäen määritettyä pyöristystilaa. Oletuspyöristystila on `RoundingMode.ToEven`. Jos annettu `value` on mitä tahansa muuta tyyppiä, käytetään `Number.FromText` sen muuntamiseen `number`\-arvoksi. Jos haluat tietoja käytettävissä olevista pyöristystiloista, katso `Number.Round`. Valinnainen `culture` voidaan myös antaa (esimerkiksi en-US).


## Examples

### Example #1
Hanki allekirjoitettu 8-bittinen kokonaislukumuotoinen `number`\-arvo kohteesta `"4"`.
```powerquery
Int8.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Hanki kohteen `"4.5"` allekirjoitettu 8-bittinen kokonaislukumuotoinen `number`\-arvo käyttämällä kohdetta `RoundingMode.AwayFromZero`.
```powerquery
Int8.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
