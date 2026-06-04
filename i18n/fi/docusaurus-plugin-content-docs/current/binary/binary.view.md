---
title: Binary.View
---

# Binary.View


Luo tai laajentaa binary-kohdetta käyttäen käyttäjän määrittämiä käsittelytoimintoja kysely- ja toimitoiminnoille.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Remarks

Palauttaa `binary` näkymän, jossa `handlers` määritettyjä funktioita käytetään toiminnon oletustoiminnan sijasta, kun toimintoa käytetään näkymään.

Jos `binary` annetaan, kaikki käsittelijäfunktiot ovat valinnaisia. Jos `binary` ei anneta, tarvitaan `GetStream` -käsittelijäfunktio. Jos käsittelijäfunktiota ei ole määritetty toiminnolle, toiminnon oletustoimintaa käytetään sen sijaan `binary` (paitsi jos kyseessä on `GetExpression`).

Handler-funktioiden on palautettava arvo, joka vastaa semanttisesti toiminnon `binary` (tai tuloksena olevaa näkymää, jos kyseessä on `GetExpression`).

Jos käsittelijäfunktio aiheuttaa virheen, toiminnon oletustoimintaa käytetään view.

`Binary.View` voidaan käyttää taittamiseen tietolähteeseen – M-kyselyiden muuntamiseksi lähdekohtaisiksi toiminnoiksi (esimerkiksi tiedoston osan lataamiseksi).

Näytä julkaistut Power Query mukautetun liittimen ohjeet, jotta saat kattavamman kuvauksen `Binary.View`.


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
