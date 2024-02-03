---
title: MailChimp.Collection
---

# MailChimp.Collection


## Description

Palauttaa taulukon, jossa on tietoja MailChimp-päätepisteestä.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Details

Tekee kutsun MailChimpin ohjelmointirajapinnalle ja palauttaa tulokseksi saadun tietojoukon taulukkona. Selaa automaattisesti tulokset läpi. Valinnaista entityName-parametria voidaan käyttää niissä ohjelmointirajapinnan päätepisteissä, joissa pääasiallinen päätepiste ei vastaa JSON-vastauksen pääasiallista entityName-parametria.


## Examples

### Example #1 
Noutaa tietotaulukon MailChimpin ohjelmointirajapinnan luettelot-päätepisteestä.
```powerquery
MailChimp.Collection("luettelot")
```

Result: 
```powerquery
Luettelotietoja sisältävä taulukko.
```


### Example #2 
Noutaa tietotaulukon MailChimpin ohjelmointirajapinnan kampanjakansiot-päätepisteestä.
```powerquery
MailChimp.Collection("kampanjakansiot", "kansiot")
```

Result: 
```powerquery
Kampanjakansiotietoja sisältävä taulukko.
```



