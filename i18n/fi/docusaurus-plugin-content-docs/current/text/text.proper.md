---
title: Text.Proper
---

# Text.Proper


Tekee kunkin sanan ensimmäisestä kirjaimesta ison kirjaimen.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Palauttaa tekstiarvon `text` kunkin sanan vain ensimmäisen kirjaimen isoksi kirjaimeksi muuttamisen tuloksen. Kaikki muut kirjaimet palautetaan pieninä kirjaimina. Valinnainen `culture` voidaan myös antaa (esimerkiksi en-US).


## Examples

### Example #1
Käytä kohdetta `Text.Proper` yksinkertaiselle virkkeelle.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
