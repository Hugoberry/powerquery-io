---
title: Web.BrowserContents
---

# Web.BrowserContents


Palauttaa määritetyn URL-osoitteen HTML-koodin selaimen tarkastelemana.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Remarks

Palauttaa määritetyn `url`HTML:n selaimen tarkastelemana. Valinnainen tietueparametri, `options`, voidaan antaa lisäominaisuuksien määrittämistä varten. Tietue voi sisältää seuraavat kentät:

-   `ApiKeyName`: Jos kohdesivustolla on ohjelmointirajapinta-avaimen käsite, tämän parametrin avulla voidaan määrittää URL-osoitteessa käytettävän avainparametrin nimi (ei arvo). Todellinen avaimen arvo annetaan tunnistetiedoissa.
-   `WaitFor`: Määrittää ehdon, jota odotetaan ennen HTML:n lataamista, sen lisäksi, että odotetaan sivun latautumista (joka on aina valmis). Voi olla tietue, joka sisältää Aikakatkaisu- ja/tai Valitsin-kentät. Jos vain aikakatkaisu on määritetty, funktio odottaa määritettyä aikaa ennen HTML-koodin lataamista. Jos sekä valitsin että aikakatkaisu määritetään ja aikakatkaisu kuluu, ennen kuin valitsin on sivulla, näyttöön tulee virhe. Jos Valitsin on määritetty ilman aikakatkaisua, käytetään oletusarvoista 30 sekunnin aikakatkaisua.


## Examples

### Example #1
Palauttaa HTML-kohteen kohteelle https://microsoft.com.
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2
Palauttaa HTML-kohteen kohteelle https://microsoft.com sen jälkeen, kun on odotettu CSS-valitsimen olevan olemassa.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3
Palauttaa HTML-kohteen kohteelle https://microsoft.com kymmenen sekunnin odotuksen jälkeen.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4
Palauttaa HTML-kohteen kohteelle https://microsoft.com sen jälkeen, kun on odotettu enintään kymmenen sekuntia CSS-valitsimen olevan olemassa.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Accessing data
