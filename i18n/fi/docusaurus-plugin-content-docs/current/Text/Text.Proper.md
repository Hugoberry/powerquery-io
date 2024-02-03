---
title: Text.Proper
---

# Text.Proper


## Description

Tekee kunkin sanan ensimmäisestä kirjaimesta ison kirjaimen.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Details

Palauttaa tekstiarvon <code>text</code> kunkin sanan vain ensimmäisen kirjaimen isoksi kirjaimeksi muuttamisen tuloksen. Kaikki muut kirjaimet palautetaan pieninä kirjaimina. Valinnainen <code>culture</code> voidaan myös antaa (esimerkiksi en-US).


## Examples

### Example #1 
Käytä kohdetta &lt;code&gt;Text.Proper&lt;/code&gt; yksinkertaiselle virkkeelle.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
