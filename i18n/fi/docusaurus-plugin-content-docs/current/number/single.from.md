---
title: Single.From
---

# Single.From


Luo Single-kohteen annetusta arvosta.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Palauttaa Single-tyyppisen `number`\-arvon annetusta kohteesta `value`. Jos annettu `value` on `null`\-tyhjäarvo, `Double.From` palauttaa arvon `null`. Jos annettu `value` on `number`, joka on Single-alueella, palautetaan `value`, ja muussa tapauksessa palautetaan virhe. Jos annettu `value` on mitä tahansa muuta tyyppiä, käytä `Number.FromText` sen muuntamiseen `number`\-arvoksi.Valinnainen `culture` voidaan myös antaa (esimerkiksi en-US).


## Examples

### Example #1
Hanki kohteen `"1.5"` Single-tyyppinen `number`\-arvo.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
