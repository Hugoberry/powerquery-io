---
title: Binary.ViewFunction
---

# Binary.ViewFunction


Luo funktion, jonka näkymälle määritetty käsittelijä voi kaapata (Binary.View-funktion kautta).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Remarks

Luo näkymäfunktion `function` perusteella, jota voidaan käsitellä `Binary.View`.

`Binary.View` käsittelijän `OnInvoke` avulla voidaan määrittää käsittelijä view-funktiolle.

Toimintoja, joissa on valmiiden toimintojen käsittelijät, jos `OnInvoke`käsittelijää ei ole määritetty, tai jos se ei käsittele näkymäfunktiota tai jos käsittelijä aiheuttaa virheen, `function` otetaan käyttöön näkymän yläosassa.

Lisätietoja on julkaistuissa Power Query mukautetun liittimen ohjeissa `Binary.View` ja mukautettujen näkymäfunktioiden täydellinen kuvaus.



## Category
Binary
