---
title: Binary.View
---

# Binary.View


## Description

Luo tai laajentaa binary-kohdetta käyttäen käyttäjän määrittämiä käsittelytoimintoja kysely- ja toimitoiminnoille.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Details

 Palauttaa <code>binary</code> näkymän, jossa <code>handlers</code> määritettyjä funktioita käytetään toiminnon oletustoiminnan sijasta, kun toimintoa käytetään näkymään.<br />Jos <code>binary</code> annetaan, kaikki käsittelijäfunktiot ovat valinnaisia. Jos <code>binary</code> ei anneta, tarvitaan <code>GetStream</code> -käsittelijäfunktio. Jos käsittelijäfunktiota ei ole määritetty toiminnolle, toiminnon oletustoimintaa käytetään sen sijaan <code>binary</code> (paitsi jos kyseessä on <code>GetExpression</code>).<br />Handler-funktioiden on palautettava arvo, joka vastaa semanttisesti toiminnon <code>binary</code> (tai tuloksena olevaa näkymää, jos kyseessä on <code>GetExpression</code>).<br />Jos käsittelijäfunktio aiheuttaa virheen, toiminnon oletustoimintaa käytetään view.<br /><code>Binary.View</code> voidaan käyttää taittamiseen tietolähteeseen – M-kyselyiden muuntamiseksi lähdekohtaisiksi toiminnoiksi (esimerkiksi tiedoston osan lataamiseksi).<br />Näytä julkaistut Power Query mukautetun liittimen ohjeet, jotta saat kattavamman kuvauksen <code>Binary.View</code>.<br />


## Examples

### Example #1 
Luo perusnäkymä, joka ei edellytä datan käyttämistä pituuden määrittämiseksi.
```powerquery
Binary.View(
    null,
    [
        GetLength = () => 12,
        GetStream = () => Text.ToBinary("hello world!")
    ]
)
```

Result: 
```powerquery
Text.ToBinary("hello world!")
```




## Category
Binary
