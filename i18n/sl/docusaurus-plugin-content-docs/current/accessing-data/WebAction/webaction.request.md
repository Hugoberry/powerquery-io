---
title: WebAction.Request
---

# WebAction.Request


Ustvari dejanje, ki ob izvedbi vrne rezultate izvajanja zahteve HTTP v obliki dvojiške vrednosti.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

Ustvari dejanje, ki bo ob izvajanju vrnilo rezultate `method` zahteve `url` kot dvojiško vrednost HTTP. Za namene določevanja dodatnih lastnosti bo morda na voljo izbiren parameter zapisa `options`. Zapis lahko vsebuje sledeča polja:

-   `Query` : Programsko dodajte parametre poizvedbe v naslov URL, pri tem pa vam ni treba skrbeti za dodajanje ubežnih znakov.
-   `ApiKeyName` : Če je na ciljnem mestu omenjen ključ vmesnika API, lahko ta parameter uporabite za navedbo imena (ne vrednosti) parametra ključa, ki ga je treba uporabiti v naslovu URL. Dejanska vrednost ključa je navedena v poverilnici.
-   `Headers` : Če navedete to vrednost kot zapis, boste v zahtevo HTTP dodali dodatne glave.
-   `Timeout` : Če navedete to vrednost kot trajanje, boste spremenili časovno omejitev za zahtevo HTTP. Privzeta vrednost je 100 sekund.
-   `ExcludedFromCacheKey` : Če navedete to vrednost kot seznam, bodo ti ključi glave HTTP izključeni iz dela izračuna za podatke predpomnjenja.
-   `IsRetry` : Če navedete to logično vrednost kot"true", boste pri pridobivanju podatkov prezrli vse obstoječe odgovore v predpomnilniku.
-   `ManualStatusHandling` : Če navedete to vrednost kot seznam, boste preprečili vse vgrajeno obravnavanje zahtev HTTP, katerih odgovor vsebuje eno od teh kod stanja.
-   `RelativePath` : Če navedete to vrednost kot besedilo, ga dodate osnovnemu naslovu URL, predem pošljete zahtevo.
-   `Content` : Če navedete to vrednost, bo njegova vsebina postala telo zahteve HTTP.

Upoštevajte, da je ta funkcija v večini kontekstov onemogočena. Priporočamo vam, da namesto tega uporabite Web.Contents ali Web.Headers.


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
