---
title: Decimal.From
---

# Decimal.From


Luo Decimal-kohteen annetusta arvosta.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Palauttaa Decimal-tyyppisen `number`\-arvon annetusta kohteesta `value`. Jos annettu `value` on `null`\-tyhjäarvo, `Double.From` palauttaa arvon `null`. Jos annettu `value` on `number`, joka on Decimal-alueella, palautetaan `value`, ja muussa tapauksessa palautetaan virhe. Jos annettu `value` on mitä tahansa muuta tyyppiä, käytä `Number.FromText` sen muuntamiseen `number`\-arvoksi.Valinnainen `culture` voidaan myös antaa (esimerkiksi en-US).


## Examples

### Example #1
Hanki kohteen `"4.5"` Decimal-tyyppinen `number`\-arvo.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
