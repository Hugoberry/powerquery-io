---
title: Int16.From
---

# Int16.From


Luo 16-bittisen kokonaisluvun annetusta arvosta.


## Syntax

```powerquery
Int16.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Palauttaa 16-bittisen kokonaislukumuotoisen `number`\-arvon annetusta kohteesta `value`. Jos annettu `value` on `null`\-tyhjäarvo, `Int16.From` palauttaa arvon `null`. Jos annettu `value` on `number`, joka on 16-bittisen kokonaisluvun alueella ilman murtolukuosaa, palautetaan `value`. Jos sillä on murtolukuosa, luku pyöristetään käyttäen määritettyä pyöristystilaa. Oletuspyöristystila on `RoundingMode.ToEven`. Jos annettu `value` on mitä tahansa muuta tyyppiä, käytetään `Number.FromText` sen muuntamiseen `number`\-arvoksi. Jos haluat tietoja käytettävissä olevista pyöristystiloista, katso `Number.Round`. Valinnainen `culture` voidaan myös antaa (esimerkiksi en-US).


## Examples

### Example #1
Hanki 16-bittinen kokonaislukumuotoinen `number`\-arvo kohteesta `"4"`.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Hanki kohteen `"4.5"` 16-bittinen kokonaislukumuotoinen `number`\-arvo käyttämällä kohdetta `RoundingMode.AwayFromZero`.
```powerquery
Int16.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
