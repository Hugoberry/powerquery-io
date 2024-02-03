---
title: Html.Table
---

# Html.Table


## Description

Palauttaa taulukon, joka sisältää määritettyjen CSS-valitsimien suorittamisen tulokset annetulle HTML-koodille.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Details

Palauttaa taulukon, joka sisältää määritettyjen CSS-valitsinten annetulle kohteelle <code>html</code> suorittamisen tulokset. Valinnainen tietueparametri <code>options</code> voidaan antaa märittämään lisäominaisuuksia. Tietue voi sisältää seuraavat kentät:<ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
Palauttaa taulukon html-tekstiarvoesimerkistä.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Esimies</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
Poimii kaikki hrefs-kohteet näytteen html-tekstiarvosta.
```powerquery
Html.Table("<a href=""/test.html"">Testi</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Käytetään tietoja
