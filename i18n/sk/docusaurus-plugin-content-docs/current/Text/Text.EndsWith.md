---
title: Text.EndsWith
---

# Text.EndsWith


## Description

Udáva, či sa text končí na zadanú hodnotu.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Udáva, či sa daný text <code>text</code> končí na zadanú hodnotu <code>substring</code>. Označenie rozlišuje malé a veľké písmená.      <div>         <code>comparer</code> je funkcia <code>Comparer</code>, ktorá sa používa na kontrolu porovnania. Porovnávače možno použiť na uvedenie porovnaní bez rozlíšenia malých a veľkých písmen alebo porovnaní zohľadňujúcich kultúru a miestne nastavenie.      </div>      <div>        V jazyku vzorcov sú k dispozícii tieto vstavané porovnávače:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: používa sa na vykonanie presného ordinálneho porovnania</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: používa sa na vykonanie presného ordinálneho porovnania bez rozlíšenia malých a veľkých písmen</li>        <li> <code>Comparer.FromCulture</code>: používa sa na vykonanie porovnania zohľadňujúceho kultúru</li>      </ul>


## Examples

### Example #1 
Skontrolujte, či text &#34;Hello, World&#34; končí textom &#34;world&#34;.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
Skontrolujte, či text &#34;Hello, World&#34; končí textom &#34;World&#34;.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
