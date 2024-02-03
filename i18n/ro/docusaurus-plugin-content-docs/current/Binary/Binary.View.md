---
title: Binary.View
---

# Binary.View


## Description

Creează sau extinde un binar cu rutine de tratare definite de utilizator pentru operații de interogare și acțiune.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Details

Returnează o vizualizare a <code>binary</code> unde funcțiile specificate în <code>handlers</code> sunt utilizate în locul comportamentului implicit al unei operații atunci când operația este aplicată vizualizării.<br />Dacă <code>binary</code> este furnizat, toate funcțiile rutinei de tratare sunt opționale. Dacă <code>binary</code> nu este furnizat, este necesară funcția de tratare <code>GetStream</code>. Dacă nu este specificată o funcție rutină de tratare pentru o operație, comportamentul implicit al operației se aplică în schimb la <code>binary</code> (cu excepția cazului <code>GetExpression</code>).<br />Funcțiile rutină de tratare trebuie să returneze o valoare care este semantic echivalentă cu rezultatul aplicării operației împotriva <code>binary</code> (sau vizualizarea rezultată în cazul <code>GetExpression</code>).<br />Dacă o funcție rutină de tratare declanșează o eroare, comportamentul implicit al operației se aplică vizualizării.<br /><code>Binary.View</code> poate fi utilizat pentru a implementa plierea la o sursă de date – traducerea interogărilor M în operații specifice sursei (de exemplu, pentru a descărca o secțiune a unui fișier).<br />Consultați documentația conectorului personalizat Power Query publicat pentru o descriere mai completă a <code>Binary.View</code>.<br />


## Examples

### Example #1 
Creează o vizualizare de bază care nu necesită accesarea datelor pentru a determina lungimea.
```powerquery
Binary.View(
    null,
    [
        GetLength = () => 12,
        GetStream = () => Text.ToBinary("hello world!")
    ]
)
```

Result: 
```powerquery
Text.ToBinary("hello world!")
```




## Category
Binary
