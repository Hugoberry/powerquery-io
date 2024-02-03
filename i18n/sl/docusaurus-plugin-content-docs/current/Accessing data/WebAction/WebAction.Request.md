---
title: WebAction.Request
---

# WebAction.Request


## Description

Ustvari dejanje, ki ob izvedbi vrne rezultate izvajanja zahteve HTTP v obliki dvojiške vrednosti.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Details

Ustvari dejanje, ki bo ob izvedbi vrnilo rezultate zahteve <code>method</code> zoper <code>url</code> prek protokola HTTP v dvojiški obliki zapisa.    Za namene določevanja dodatnih lastnosti bo morda na voljo izbiren parameter zapisa <code>options</code>. Zapis lahko vsebuje ta polja:    <ul><li><code>Query</code> : Programsko dodajte parametre poizvedbe v naslov URL, pri tem pa vam ni treba skrbeti za dodajanje ubežnih znakov.</li><li><code>ApiKeyName</code> : Če je na ciljnem mestu omenjen ključ vmesnika API, lahko ta parameter uporabite za navedbo imena (ne vrednosti) parametra ključa, ki ga je treba uporabiti v naslovu URL. Dejanska vrednost ključa je navedena v poverilnici.</li><li><code>Headers</code> : Če navedete to vrednost kot zapis, boste v zahtevo HTTP dodali dodatne glave.</li><li><code>Timeout</code> : Če navedete to vrednost kot trajanje, boste spremenili časovno omejitev za zahtevo HTTP. Privzeta vrednost je 100 sekund.</li><li><code>ExcludedFromCacheKey</code> : Če navedete to vrednost kot seznam, bodo ti ključi glave HTTP izključeni iz dela izračuna za podatke predpomnjenja.</li><li><code>IsRetry</code> : Če navedete to logično vrednost kot &#187;true&#171;, boste pri pridobivanju podatkov prezrli vse obstoječe odgovore v predpomnilniku.</li><li><code>ManualStatusHandling</code> : Če navedete to vrednost kot seznam, boste preprečili vse vgrajeno obravnavanje zahtev HTTP, katerih odgovor vsebuje eno od teh kod stanja.</li><li><code>RelativePath</code> : Če navedete to vrednost kot besedilo, ga dodate osnovnemu naslovu URL, predem pošljete zahtevo.</li><li><code>Content</code> : Če navedete to vrednost, bo njegova vsebina postala telo zahteve HTTP.</li></ul>    <br />    Ta funkcija je v večini primerov onemogočena. Morda bi raje uporabili parameter Web.Contents ali Web.Headers.    


## Examples

### Example #1 
Izvedite zahtevo GET za Bing.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
