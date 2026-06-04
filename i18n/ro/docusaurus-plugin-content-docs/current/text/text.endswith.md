---
title: Text.EndsWith
---

# Text.EndsWith


Indică dacă textul se termină cu valoarea specificată.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Indică dacă textul dat, `text`, se termină cu valoarea specificată, `substring`. Indicația este sensibilă la litere mari și mici.

`comparer` este o funcție de comparare `Comparer` care este utilizată pentru a controla comparația. Funcțiile de comparare pot fi utilizate pentru a furniza comparații care nu țin cont de diferența între literele mari sau mici ori care țin cont de cultură și de setările regionale.

Următoarele funcții de comparare predefinite sunt disponibile în limbajul pentru formule:

-   `Comparer.Ordinal`: Utilizată pentru a efectua o comparație ordinală exactă
-   `Comparer.OrdinalIgnoreCase`: Utilizată pentru a efectua o comparație ordinală exactă care nu este sensibilă la litere mari și mici
-   `Comparer.FromCulture`: Utilizată pentru a efectua o comparație care ține cont de cultură


## Examples

### Example #1
Verificaţi dacă „Hello, World” se termină cu „world”.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
Verificaţi dacă „Hello, World” se termină cu „World”.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
