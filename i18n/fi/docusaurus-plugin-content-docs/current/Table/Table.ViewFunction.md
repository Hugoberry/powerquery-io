---
title: Table.ViewFunction
---

# Table.ViewFunction


## Description

Luo funktion, jonka näkymälle määritetty käsittelijä voi kaapata (Table.View-funktion kautta).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Details

Luo näkymäfunktion <code>function</code> perusteella, jota voidaan käsitellä <code>Table.View</code>.<br /><code>Table.View</code> käsittelijän <code>OnInvoke</code> avulla voidaan määrittää käsittelijä view-funktiolle.<br />Toimintoja, joissa on valmiiden toimintojen käsittelijät, jos <code>OnInvoke</code>käsittelijää ei ole määritetty, tai jos se ei käsittele näkymäfunktiota tai jos käsittelijä aiheuttaa virheen, <code>function</code> otetaan käyttöön view.<br />Lisätietoja on julkaistuissa Power Query mukautetun liittimen ohjeissa <code>Table.View</code> ja mukautettujen näkymäfunktioiden täydellinen kuvaus.<br />



## Category
Table.Table construction
