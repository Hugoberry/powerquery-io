---
title: Text.StartsWith
---

# Text.StartsWith


## Description

Udáva, či sa text začína na zadanú hodnotu.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Vráti hodnotu True, ak sa textová hodnota <code>text</code> začína textovou hodnotou <code>substring</code>.      <ul>        <li><code>text</code>: <i></i> Hodnota <code>text</code>, ktorá sa má vyhľadať,</li>        <li><code>substring</code>: <i></i> Hodnota <code>text</code>, ktorá predstavuje hľadaný podreťazec v texte <code>substring</code>.</li>        <li><code>comparer</code>: <i>[Voliteľné]</i> Funkcia <code>Comparer</code> použitá na kontrolu porovnania. Na vykonanie hľadaní bez rozlíšenia malých a veľkých písmen možno napríklad použiť funkciu <code>Comparer.OrdinalIgnoreCase</code>.</li>      </ul>      <div>         je funkcia <code>comparer</code> <code>Comparer</code>, ktorá sa používa na kontrolu porovnania. Porovnávače možno použiť na uvedenie porovnaní bez rozlíšenia malých a veľkých písmen alebo porovnaní zohľadňujúcich kultúru a miestne nastavenie.      </div>      <div>        V jazyku vzorcov sú k dispozícii tieto vstavané porovnávače:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: používa sa na vykonanie presného ordinálneho porovnania</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: používa sa na vykonanie presného ordinálneho porovnania bez rozlíšenia malých a veľkých písmen</li>        <li> <code>Comparer.FromCulture</code>: používa sa na vykonanie porovnania zohľadňujúceho kultúru</li>      </ul>


## Examples

### Example #1 
Skontrolujte, či sa text &#34;Hello, World&#34; začína textom &#34;hello&#34;.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
Skontrolujte, či sa text &#34;Hello, World&#34; začína textom &#34;Hello&#34;.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
