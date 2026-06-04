---
title: Text.PositionOf
---

# Text.PositionOf


Returnează prima poziţie a valorii (-1 dacă nu se găseşte).


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Remarks

Returnează poziția de ocurență specificată a valorii text `substring` găsită în `text`. Se poate utiliza un parametru opțional `occurrence` pentru a specifica poziția ocurență de returnat (prima ocurență în mod implicit). Returnează -1 dacă nu s-a găsit `substring`.

`comparer` este o `Funcție de comparare` care este utilizată pentru a controla comparația. Funcțiile de comparare pot fi utilizate pentru a furniza comparații care nu țin cont de diferența între litere mari sau mici ori care țin cont de cultură și de setările regionale.

Următoarele funcții de comparare predefinite sunt disponibile în limbajul pentru formule:

-   `Comparer.Ordinal`: Utilizat pentru a efectua o comparație ordinală exactă
-   `Comparer.OrdinalIgnoreCase`: Utilizat pentru a efectua o comparație exactă care nu este sensibilă la litere mari și mici
-   `Comparer.FromCulture`: Utilizat pentru a efectua o comparație care ține cont de cultură


## Examples

### Example #1
Obţineţi poziţia primei ocurenţe a textului „World” din textul „Hello, World! Hello, World!”.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
Obțineți poziția ultimei ocurențe a textului „World” din „Hello, World! Hello, World!”.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
