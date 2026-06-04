---
title: AtScale.Cubes
---

# AtScale.Cubes


Date cub import/DirectQuery de la un AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Remarks

Returnează datele cub de la AtScale pe serverul `server`. Un parametru opțional de înregistrare, `options`, poate fi specificat pentru a controla următoarele opțiuni:

-   `TypedMeasureColumns`: o valoare logică care precizează dacă tipurile specificate în modelul tabelar sau multidimensional vor fi utilizate pentru tipurile de coloane de măsură adăugate. Când este setat la false, va fi utilizat tipul „number” pentru toate coloanele de măsură. Valoarea implicită pentru această opțiune este false.
-   `CommandTimeout`: o durată (în secunde) care controlează cât timp poate rula interogarea pe partea serverului, înainte de a fi anulată. Valoarea implicită este dependentă de driver.
-   `ConnectionTimeout`: o durată (în secunde) care controlează cât timp se așteaptă înainte de abandonarea unei încercări de a face o conexiune la server. Valoarea implicită este dependentă de driver.

Parametrul de înregistrare este specificat ca \[opțiune1 = valoare1, opțiune2 = valoare2...\].


## Examples

### Example #1
Listează datele de cub dintr-un cub AtScale.
```powerquery
AtScale.Cubes("https://contoso.atscale.com:10502/xmla/...")
```



