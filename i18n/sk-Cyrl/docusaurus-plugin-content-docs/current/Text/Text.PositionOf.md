---
title: Text.PositionOf
---

# Text.PositionOf


## Description

Vráti prvú pozíciu hodnoty (–1, ak sa nenájde).


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

Vráti pozíciu zadaného výskytu textovej hodnoty <code>substring</code> nájdenú v hodnote <code>text</code>.    Na zadanie pozície výskytu, ktorá sa má vrátiť (predvolene prvý výskyt), možno použiť voliteľný parameter <code>occurrence</code>.    Vráti -1, ak sa hodnota <code>substring</code> nenašla.\      <div>        <code>comparer</code> je porovnávač <code>Comparer</code>>, ktorá sa používa na kontrolu porovnania. Porovnávače možno použiť na uvedenie porovnaní bez rozlíšenia malých a veľkých písmen alebo porovnaní zohľadňujúcich kultúru a miestne nastavenie.      </div>      <div>        V jazyku vzorcov sú k dispozícii tieto vstavané porovnávače:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: používa sa na vykonanie presného ordinálneho porovnania</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: používa sa na vykonanie presného ordinálneho porovnania bez rozlíšenia malých a veľkých písmen</li>        <li> <code>Comparer.FromCulture</code>: používa sa na vykonanie porovnania zohľadňujúceho kultúru</li>      </ul>


## Examples

### Example #1 
Získajte pozíciu prvého výskytu textu &#34;World&#34; v texte &#34;Hello, World! Hello, World!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
Získajte pozíciu posledného výskytu textu &#34;World&#34; v texte &#34;Hello, World! Hello, World!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
