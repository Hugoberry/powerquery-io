---
title: Text.Contains
---

# Text.Contains


## Description

Vráti informácie o tom, či text obsahuje podreťazec.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Zistí, či funkcia <code>text</code> obsahuje hodnotu <code>substring</code>. Vráti hodnotu True, ak sa hodnota nájde. Táto funkcia nepodporuje zástupné znaky ani regulárne výrazy.      <br />      <br />    Voliteľný argument <code>comparer</code> možno použiť na určenie porovnaní bez rozlíšenia malých a veľkých písmen alebo porovnaní zohľadňujúcich jazyk a miestne nastavenie.      V jazyku vzorcov sú k dispozícii tieto vstavané porovnávače:      <ul>        <li><code>Comparer.Ordinal</code>: používa sa na vykonanie porovnania poradia s rozlíšením malých a veľkých písmen</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: používa sa na vykonanie porovnania poradia bez rozlíšenia malých a veľkých písmen</li>        <li> <code>Comparer.FromCulture</code>: používa sa na vykonanie porovnania zohľadňujúceho jazyk</li>      </ul>


## Examples

### Example #1 
Zistite, či text &#34;Hello World&#34; obsahuje text &#34;Hello&#34;.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
Zistite, či text &#34;Hello World&#34; obsahuje text &#34;hello&#34;.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
Zistite, či text „Hello World“ obsahuje „hello“ pomocou porovnávača, ktorý nerozlišuje malé a veľké písmená.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
