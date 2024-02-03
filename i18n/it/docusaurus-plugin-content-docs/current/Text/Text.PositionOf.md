---
title: Text.PositionOf
---

# Text.PositionOf


## Description

Restituisce la prima posizione del valore (-1 se non trovata).


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

Restituisce la posizione dell'occorrenza specificata del valore di testo <code>substring</code> trovato in <code>text</code>. È possibile utilizzare un parametro facoltativo <code>occurrence</code> per specificare la posizione dell'occorrenza da restituire (prima occorrenza per impostazione predefinita). Restituisce -1 se <code>substring</code> non è stato trovato. <div><code>comparer</code> è un <code>Operatore di confronto</code> usato per controllare il confronto. Gli operatori di confronto possono essere usati per fornire confronti con distinzione tra maiuscole e minuscole oppure confronti in grado di riconoscere le impostazioni cultura e locali. </div> <div> Nel linguaggio delle formule sono disponibili gli strumenti di confronto predefiniti seguenti: </div> <ul> <li><code>Comparer.Ordinal</code>:  usato per eseguire un confronto ordinale esatto</li> <li><code>Comparer.OrdinalIgnoreCase</code>: usato per eseguire un confronto ordinale esatto senza distinzione tra maiuscole e minuscole</li> <li><code>Comparer.FromCulture</code>: usato per eseguire un confronto in grado di riconoscere le impostazioni cultura</li></ul>


## Examples

### Example #1 
Ottenere la posizione della prima occorrenza di &#34;World&#34; nel testo &#34;Hello, World! Hello, World!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
Ottenere la posizione dell&#39;ultima occorrenza di &#34;World&#34; nel testo &#34;Hello, World! Hello, World!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
