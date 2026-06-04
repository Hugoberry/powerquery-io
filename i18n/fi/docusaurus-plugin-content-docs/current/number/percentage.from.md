---
title: Percentage.From
---

# Percentage.From


Palauttaa prosenttiarvon annetusta arvosta.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Palauttaa `percentage`\-arvon annetusta kohteesta `value`. Jos annettu `value` on `null`, `Percentage.From` palauttaa tuloksen `null`. Jos annettu `value` on `text`\-tyyppinen merkkijono, jossa on lopussa prosenttimerkki, palautetaan muunnettu desimaaliluku. Käytä muussa tapauksessa kohdetta `Number.From` sen muuntamiseen `number`\-tyyppiseksi arvoksi. Valinnainen `culture` voidaan myös antaa (esimerkiksi en-US).


## Examples

### Example #1
Hanki kohteen `"12.3%"` `percentage`\-arvo.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
