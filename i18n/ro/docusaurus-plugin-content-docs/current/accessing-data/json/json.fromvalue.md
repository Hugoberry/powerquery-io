---
title: Json.FromValue
---

# Json.FromValue


Produce o reprezentare JSON a unei valori date.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

Generează o reprezentare JSON a unei valori date `value` cu o codificare de text specificată de `encoding`. Dacă `encoding` se omite, se utilizează UTF8. Valorile sunt reprezentate după cum urmează:

-   Valorile nule, text și logice sunt reprezentate ca tipurile JSON corespunzătoare
-   Numerele sunt reprezentate ca numere în JSON, cu excepția faptului că `#infinity`, `-#infinity` și `#nan` sunt convertite la valori nule
-   Listele sunt reprezentate ca matrice JSON
-   Înregistrările sunt reprezentate ca obiecte JSON
-   Tabelele sunt reprezentate ca matrice de obiecte
-   Datele, orele, valorile dată și oră, valorile dată și fus orar și duratele sunt reprezentate ca text ISO-8601
-   Valorile binare sunt reprezentate ca text codificat în baza 64
-   Tipurile și funcțiile generează o eroare


## Examples

### Example #1
Faceți conversia unei valori complexe la JSON.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
