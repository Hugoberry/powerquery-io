---
title: Table.ViewFunction
---

# Table.ViewFunction


Luo funktion, jonka näkymälle määritetty käsittelijä voi kaapata (Table.View-funktion kautta).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Remarks

Luo näkymäfunktion `function` perusteella, jota voidaan käsitellä `Table.View`.

`Table.View` käsittelijän `OnInvoke` avulla voidaan määrittää käsittelijä view-funktiolle.

Toimintoja, joissa on valmiiden toimintojen käsittelijät, jos `OnInvoke`käsittelijää ei ole määritetty, tai jos se ei käsittele näkymäfunktiota tai jos käsittelijä aiheuttaa virheen, `function` otetaan käyttöön view.

Lisätietoja on julkaistuissa Power Query mukautetun liittimen ohjeissa `Table.View` ja mukautettujen näkymäfunktioiden täydellinen kuvaus.



## Category
Table.Table construction
