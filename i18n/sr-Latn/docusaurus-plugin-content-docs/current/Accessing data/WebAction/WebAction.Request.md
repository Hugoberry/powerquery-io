---
title: WebAction.Request
---

# WebAction.Request


## Description

Kreira radnju koja će, kad se izvrši, vratiti rezultate izvršavanja HTTP zahteva kao binarnu vrednost.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Details

Kreira radnju koja će, kada se izvrši, vratiti rezultate izvršavanja <code>method</code> u odnosu na <code>url</code> koristeći HTTP kao binarnu vrednost.    Može da se obezbedi opcionalni parametar zapisa, <code>options</code>, da bi se navela dodatna svojstva. Zapis može da sadrži sledeća polja:    <ul><li><code>Query</code> : Programski dodajte parametre upita u URL adresu bez potrebe da razmišljate o izbegavanju.</li><li><code>ApiKeyName</code> : Ako ciljna lokacija ima zapis o API ključu, ovaj parametar se može koristiti za navođenje imena (ne vrednosti) parametra ključa koji mora da se koristi u URL adresi. Stvarna vrednost ključa je data u akreditivu.</li><li><code>Headers</code> : Ako navedete ovu vrednost kao zapis, dodaćete zaglavlja u HTTP zahtev.</li><li><code>Timeout</code> : Ako navedete ovu vrednost kao trajanje, promenićete vremensko ograničenje za HTTP zahtev. Podrazumevana vrednost je 100 sekundi.</li><li><code>ExcludedFromCacheKey</code> : Ako navedete ovu vrednost kao listu, ovi ključevi HTTP zaglavlja neće biti uključeni u izračunavanje za keširanje podataka.</li><li><code>IsRetry</code> : Navođenjem ove logičke vrednosti kao tačne zanemarićete postojeći odgovor u keš memoriji prilikom preuzimanja podataka.</li><li><code>ManualStatusHandling</code> : Ako navedete ovu vrednost kao listu, sprečićete ugrađenu obradu HTTP zahteva čiji odgovor ima jedan od ovih kodova statusa.</li><li><code>RelativePath</code> : Ako navedete ovu vrednost kao tekst, dodaćete je u osnovnu URL adresu pre upućivanja zahteva.</li><li><code>Content</code> : Ako navedete ovu vrednost, njen sadržaj će postati telo HTTP zahteva.</li></ul>    <br /> Imajte na umu da je ova funkcija onemogućena u većini konteksta. Razmotrite korišćenje Web.Contents ili Web.Headers.    


## Examples

### Example #1 
Izvršite GET zahtev u odnosu na Bing.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
