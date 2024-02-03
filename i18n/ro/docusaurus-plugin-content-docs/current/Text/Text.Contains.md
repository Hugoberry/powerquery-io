---
title: Text.Contains
---

# Text.Contains


## Description

Returnează dacă textul conţine un subşir.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Detectează dacă <code>text</code> conține valoarea <code>substring</code>. Returnează true dacă valoarea este găsită. Această funcție nu acceptă caractere wildcard sau expresii regulate.      <br />      <br />      Argumentul opțional <code>comparer</code> poate fi utilizat pentru a specifica comparații care nu sunt sensibile la litere mari și mici sau care țin cont de cultură și de setările regionale.      Următoarele funcții de comparare încorporate sunt disponibile în limbajul formulelor:      <ul>        <li><code>Comparer.Ordinal</code>: Utilizat pentru a efectua o comparație ordinală sensibilă la litere mari și mici</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Utilizat pentru a efectua o comparație ordinală care nu este sensibilă la litere mari și mici</li>        <li> <code>Comparer.FromCulture</code>: Utilizată pentru a efectua o comparație care ține cont de cultură</li>      </ul>


## Examples

### Example #1 
Aflaţi dacă textul „Hello World” conţine „Hello”.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
Aflaţi dacă textul „Hello World” conţine „hello”.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
Aflați dacă textul „Hello World” conține „hello”, utilizând o funcție de comparare care nu diferențiază între litere mari și mici.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
