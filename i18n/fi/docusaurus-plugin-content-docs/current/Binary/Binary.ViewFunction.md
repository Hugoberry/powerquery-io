---
title: Binary.ViewFunction
---

# Binary.ViewFunction


## Description

Luo funktion, jonka näkymälle määritetty käsittelijä voi kaapata (Binary.View-funktion kautta).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Details

Luo näkymäfunktion <code>function</code> perusteella, jota voidaan käsitellä <code>Binary.View</code>.<br /><code>Binary.View</code> käsittelijän <code>OnInvoke</code> avulla voidaan määrittää käsittelijä view-funktiolle.<br />Toimintoja, joissa on valmiiden toimintojen käsittelijät, jos <code>OnInvoke</code>käsittelijää ei ole määritetty, tai jos se ei käsittele näkymäfunktiota tai jos käsittelijä aiheuttaa virheen, <code>function</code> otetaan käyttöön näkymän yläosassa.<br />Lisätietoja on julkaistuissa Power Query mukautetun liittimen ohjeissa <code>Binary.View</code> ja mukautettujen näkymäfunktioiden täydellinen kuvaus.<br />



## Category
Binary
