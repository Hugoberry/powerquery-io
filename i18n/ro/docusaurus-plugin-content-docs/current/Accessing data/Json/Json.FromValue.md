---
title: Json.FromValue
---

# Json.FromValue


## Description

Produce o reprezentare JSON a unei valori date.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Details

Generează o reprezentare JSON a unei valori date <code>value</code> cu o codificare de text specificată de <code>encoding</code>. Dacă <code>encoding</code> se omite, se utilizează UTF8. Valorile sunt reprezentate după cum urmează:<br /> <ul>        <li>valorile nule, text și logice sunt reprezentate ca tipuri JSON corespunzătoare</li>        <li>Numerele sunt reprezentate ca numere în JSON, cu excepția faptului că  <code>#infinity</code>, <code>-#infinity</code> și <code>#nan</code> sunt convertite la valori nule</li>        <li>Listele sunt reprezentate ca matrice JSON</li>        <li>Înregistrările sunt reprezentate ca obiecte JSON</li>        <li>Tabelele sunt reprezentate ca matrice de obiecte</li>        <li>Datele, orele, valorile dată și oră, valorile dată și fus orar și duratele sunt reprezentate ca text ISO-8601</li>        <li>Valorile binare sunt reprezentate ca text codificat în baza 64</li>        <li>Tipurile și funcțiile generează o eroare</li> </ul>    


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
