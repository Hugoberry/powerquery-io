---
title: Logical.From
---

# Logical.From


Luo loogisen arvon annetusta arvosta.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Palauttaa `logical`\-arvon annetusta kohteesta `value`. Jos annettu `value` on `null`, `Logical.From` palauttaa kohteen `null`. Jos annettu `value` on `logical`, palautetaan `value`. Seuraavia tyyppejä olevat arvot voidaan muuntaa `logical`\-arvoksi:

-   `text`: `logical`\-arvo tekstimerkkijonosta, joko `"true"` tai `"false"`. Jos haluat lisätietoja, katso `Logical.FromText`.
-   `number`: `false`, jos `value` on `0`, ja `true` muussa tapauksessa.

Jos `value` on jokin muu tyyppi, palautetaan virhe.


## Examples

### Example #1
Muunna `2` `logical`\-arvoksi.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
