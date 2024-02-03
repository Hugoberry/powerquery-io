---
title: Csv.Document
---

# Csv.Document


## Description

Palauttaa CSV-tiedoston sisällön taulukkona.


## Syntax

```powerquery
Csv.Document(
    source as any,
    optional columns as any,
    optional delimiter as any,
    optional extraValues as number,
    optional encoding as TextEncoding.Type
) as table
```


## Details

Palauttaa CSV-tiedoston sisällön taulukkona.    <ul>      <li>        <code>columns</code> voi olla tyhjäarvo, sarakkeiden määrä, sarakkeiden nimien luettelo, taulukkotyyppi tai asetustietue.      </li>      <li>        <code>delimiter</code> voi olla yksittäinen merkki tai merkkiluettelo, tai arvo <code>""</code>, joka kertoo, että rivien jakajana tulisi olla yhtenäiset välilyönnit. Oletusarvo: <code>""</code>.      </li>      <li>        Määritä tekstin koodaustyyppi <code>ExtraValues.Type</code> tuettujen arvojen <code>extraValues</code>.      </li>      <li>        <code>encoding</code> määrittää tekstin koodaustyypin.      </li>    </ul>    Jos tietue määritetään <code>columns</code> (ja <code>delimiter</code>, <code>extraValues</code> ja <code>encoding</code> ovat tyhjäarvoja), seuraavat tietuekentät voidaan antaa:    <ul>      <li>        <code>Erotin</code>: Sarake-erotin. Oletusarvo: <code>""</code>.      </li>      <li>        <code>Sarakkeet</code>: Voi olla tyhjäarvo, sarakkeiden määrä, sarakkeiden nimien luettelo tai taulukkotyyppi. Jos sarakkeiden määrä on pienempi kuin syötteessä oleva luku, lisäsarakkeet ohitetaan. Jos sarakkeiden määrä on suurempi kuin syötteessä oleva luku, lisäsarakkeet ovat tyhjäarvoisia. Kun tätä ei määritetä, sarakkeiden määrä määräytyy sen mukaan, mitä kohteesta syötetään.      </li>      <li>        <code>Encoding</code>: tiedoston tekstin koodaus. Oletusarvo: 65001 (UTF-8).      </li>      <li>        <code>CsvStyle-</code>: Määrittää lainausmerkkien käsittelyn.        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (oletus): kentän lainausmerkit ovat merkitseviä vain heti erottimen jälkeen.          </li>          <li>            <code>CsvStyle.QuoteAlways</code>: Lainausmerkit kentässä ovat aina merkitseviä riippumatta niiden sijainnista.          </li>        </ul>      </li>      <li>        <code>QuoteStyle-</code>: Määrittää, miten lainausmerkissä olevat rivinvaihdot käsitellään.        <ul>          <li>            <code>QuoteStyle.Csv</code> (oletus): lainausmerkeissä olevia rivinvaihtoja käsitellään osana tietoja, eikä nykyisen rivin loppuna.          </li>          <li>            <code>QuoteStyle.None</code>: kaikkia rivinvaihtoja käsitellään nykyisen rivin loppuna, vaikka ne ovat lainausmerkeissä olevan arvon sisällä.          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
Käsittele CSV-teksti, jossa on sarakeotsikoita
```powerquery
let
    csv = Text.Combine({"OrderID,Item", "1,Fishing rod", "2,1 lb. worms"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Item = "Fishing rod"],
    [OrderID = "2", Item = "1 lb. worms"]
})
```




## Category
Accessing data
