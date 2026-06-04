---
title: Html.Table
---

# Html.Table


Palauttaa taulukon, joka sisältää määritettyjen CSS-valitsimien suorittamisen tulokset annetulle HTML-koodille.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Remarks

Palauttaa taulukon, joka sisältää määritettyjen CSS-valitsinten annetulle kohteelle `html` suorittamisen tulokset. Valinnainen tietueparametri `options` voidaan antaa märittämään lisäominaisuuksia. Tietue voi sisältää seuraavat kentät:

-   `RowSelector`


## Examples

### Example #1
Palauttaa taulukon html-tekstiarvoesimerkistä.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Manager</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2
Poimii kaikki hrefs-kohteet näytteen html-tekstiarvosta.
```powerquery
Html.Table("<a href=""/test.html"">Test</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Accessing data
