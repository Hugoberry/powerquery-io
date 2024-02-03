---
title: Text.EndsWith
---

# Text.EndsWith


## Description

Indică dacă textul se termină cu valoarea specificată.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Indică dacă textul dat, <code>text</code>, se termină cu valoarea specificată, <code>substring</code>. Indicația este sensibilă la litere mari și mici.      <div>        <code>comparer</code> este o funcție de comparare <code>Comparer</code> care este utilizată pentru a controla comparația. Funcțiile de comparare pot fi utilizate pentru a furniza comparații care nu țin cont de diferența între literele mari sau mici ori care țin cont de cultură și de setările regionale.      </div>      <div>        Următoarele funcții de comparare predefinite sunt disponibile în limbajul pentru formule:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Utilizată pentru a efectua o comparație ordinală exactă</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Utilizată pentru a efectua o comparație ordinală exactă care nu este sensibilă la litere mari și mici</li>        <li> <code>Comparer.FromCulture</code>: Utilizată pentru a efectua o comparație care ține cont de cultură</li>      </ul>


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
