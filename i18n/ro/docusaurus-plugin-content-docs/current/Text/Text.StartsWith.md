---
title: Text.StartsWith
---

# Text.StartsWith


## Description

Indică dacă textul începe cu o valoare specificată.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Returnează true dacă valoarea text <code>text</code> începe cu valoarea text <code>substring</code>.      <ul>        <li><code>text</code>: <i></i> O valoare <code>text</code> care urmează să fie căutată</li>        <li><code>substring</code>: <i></i> O valoare <code>text</code> care este subșirul de căutat în <code>substring</code></li>        <li><code>comparer</code>: <i>[Opțional]</i> O funcție de comparare <code>Comparer</code> utilizată pentru controlul comparației. De exemplu, <code>Comparer.OrdinalIgnoreCase</code> poate fi utilizată pentru a efectua căutări care nu sunt sensibile la litere mari și mici</li>      </ul>      <div>        <code>comparer</code> este o funcție de comparare <code>Comparer</code> care este utilizată pentru a controla comparația. Funcțiile de comparare pot fi utilizate pentru a furniza comparații care nu țin cont de diferența între literele mari sau mici ori care țin cont de cultură și de setările regionale.      </div>      <div>        Următoarele funcții de comparare predefinite sunt disponibile în limbajul pentru formule:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Utilizată pentru a efectua o comparație ordinală exactă</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Utilizată pentru a efectua o comparație ordinală exactă, care nu este sensibilă la litere mari și mici</li>        <li> <code>Comparer.FromCulture</code>: Utilizat pentru a efectua o comparație care ține cont de cultură</li>      </ul>


## Examples

### Example #1 
Verificaţi dacă textul „Hello, World” începe cu textul „hello”.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
Verificaţi dacă textul „Hello, World” începe cu textul „Hello”.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
