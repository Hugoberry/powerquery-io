---
title: Web.Headers
---

# Web.Headers


## Description

Vrne glave HTTP, prenesene iz URL-ja, kot vrednost zapisa.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Details

Vrne glave, prenesene iz vira <code>url</code>, v obliki zapisa. Za namene določevanja dodatnih lastnosti bo morda na voljo izbiren parameter zapisa <code>options</code>. Zapis lahko vsebuje ta polja:    <ul><li><code>Query</code> : Programsko dodajte parametre poizvedbe v naslov URL, pri tem pa vam ni treba skrbeti za dodajanje ubežnih znakov.</li><li><code>ApiKeyName</code> : Če je na ciljnem mestu omenjen ključ vmesnika API, lahko ta parameter uporabite za navedbo imena (ne vrednosti) parametra ključa, ki ga je treba uporabiti v naslovu URL. Dejanska vrednost ključa je navedena v poverilnici.</li><li><code>Headers</code> : Če navedete to vrednost kot zapis, boste v zahtevo HTTP dodali dodatne glave.</li><li><code>Timeout</code> : Če navedete to vrednost kot trajanje, boste spremenili časovno omejitev za zahtevo HTTP. Privzeta vrednost je 100 sekund.</li><li><code>ExcludedFromCacheKey</code> : Če navedete to vrednost kot seznam, bodo ti ključi glave HTTP izključeni iz dela izračuna za podatke predpomnjenja.</li><li><code>IsRetry</code> : Če navedete to logično vrednost kot &#187;true&#171;, boste pri pridobivanju podatkov prezrli vse obstoječe odgovore v predpomnilniku.</li><li><code>ManualStatusHandling</code> : Če navedete to vrednost kot seznam, boste preprečili vse vgrajeno obravnavanje zahtev HTTP, katerih odgovor vsebuje eno od teh kod stanja.</li><li><code>RelativePath</code> : Če navedete to vrednost kot besedilo, ga dodate osnovnemu naslovu URL, predem pošljete zahtevo.</li></ul>    Zahteva HTTP je bila podana z metodo HEAD. Izven konteksta povezovalnika za podatke po meri je na voljo le podmnožica glav (zaradi varnosti).    


## Examples

### Example #1 
Pridobite glave HTTP za &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; z možnostma &#34;RelativePath&#34; in &#34;Query&#34;.
```powerquery
let
    searchText = "Power Query"
in
    Web.Headers(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
([
    #"Cache-Control" = "private, max-age=0",
    #"Content-Encoding" = "gzip",
    #"Content-Length" = "0",
    #"Content-Type" = "text/html; charset=utf-8",
    Date = "Tue, 14 Dec 2021 16:57:25 GMT",
    Expires = "Tue, 14 Dec 2021 16:56:25 GMT",
    Vary = "Accept-Encoding"
]
meta [
    Response.Status = 200
])
```




## Category
Accessing data
