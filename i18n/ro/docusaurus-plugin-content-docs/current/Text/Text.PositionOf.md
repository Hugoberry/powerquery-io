---
title: Text.PositionOf
---

# Text.PositionOf


## Description

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


## Details

Returnează poziția de ocurență specificată a valorii text <code>substring</code> găsită în <code>text</code>.    Se poate utiliza un parametru opțional <code>occurrence</code> pentru a specifica poziția ocurență de returnat (prima ocurență în mod implicit).    Returnează -1 dacă nu s-a găsit <code>substring</code>.      <div>        <code>comparer</code> este o <code>Funcție de comparare</code> care este utilizată pentru a controla comparația. Funcțiile de comparare pot fi utilizate pentru a furniza comparații care nu țin cont de diferența între litere mari sau mici ori care țin cont de cultură și de setările regionale.      </div>      <div>        Următoarele funcții de comparare predefinite sunt disponibile în limbajul pentru formule:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Utilizat pentru a efectua o comparație ordinală exactă</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Utilizat pentru a efectua o comparație exactă care nu este sensibilă la litere mari și mici</li>        <li> <code>Comparer.FromCulture</code>: Utilizat pentru a efectua o comparație care ține cont de cultură</li>      </ul>


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
