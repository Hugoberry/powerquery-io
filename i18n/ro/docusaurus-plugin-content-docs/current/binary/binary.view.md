---
title: Binary.View
---

# Binary.View


Creează sau extinde un binar cu rutine de tratare definite de utilizator pentru operații de interogare și acțiune.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Remarks

Returnează o vizualizare a `binary` unde funcțiile specificate în `handlers` sunt utilizate în locul comportamentului implicit al unei operații atunci când operația este aplicată vizualizării.

Dacă `binary` este furnizat, toate funcțiile rutinei de tratare sunt opționale. Dacă `binary` nu este furnizat, este necesară funcția de tratare `GetStream`. Dacă nu este specificată o funcție rutină de tratare pentru o operație, comportamentul implicit al operației se aplică în schimb la `binary` (cu excepția cazului `GetExpression`).

Funcțiile rutină de tratare trebuie să returneze o valoare care este semantic echivalentă cu rezultatul aplicării operației împotriva `binary` (sau vizualizarea rezultată în cazul `GetExpression`).

Dacă o funcție rutină de tratare declanșează o eroare, comportamentul implicit al operației se aplică vizualizării.

`Binary.View` poate fi utilizat pentru a implementa plierea la o sursă de date – traducerea interogărilor M în operații specifice sursei (de exemplu, pentru a descărca o secțiune a unui fișier).

Consultați documentația conectorului personalizat Power Query publicat pentru o descriere mai completă a `Binary.View`.


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
