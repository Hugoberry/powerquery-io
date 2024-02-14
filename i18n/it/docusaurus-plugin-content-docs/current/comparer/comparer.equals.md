---
title: Comparer.Equals
---

# Comparer.Equals


Restituisce un valore logico basato sul controllo di uguaglianza sui due valori specificati.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

Restituisce un valore <code>logico</code> in base al controllo di uguaglianza sui due valori specificati, <code>x</code> e <code>y</code>, utilizzando il <code>x</code> specificato.<code>comparer</code>.      <div>        <code>comparer</code> è un <code>operatore di confronto</code> usato per controllare il confronto.        Un operatore di confronto è una funzione che accetta due argomenti e restituisce -1, 0 o 1 a seconda che il primo valore sia minore, uguale a  o maggiore del secondo.        Gli operatori di confronto possono essere usati per eseguire confronti senza distinzione tra maiuscole e minuscole oppure confronti in grado di riconoscere le impostazioni cultura e locali.      </div>      <div>        Nel linguaggio delle formule sono disponibili gli operatori di confronto predefiniti seguenti:      </div>      <ul>        <li><code>Comparer.OrdinalIgnoreCase</code>: usato per eseguire un confronto ordinale esatto</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: usato per eseguire un confronto ordinale esatto senza distinzione tra maiuscole e minuscole</li>        <li> <code>Comparer.FromCulture</code>: usato per eseguire un confronto in grado di riconoscere le impostazioni cultura</li>      </ul>


## Examples

### Example #1 
Confronta &#34;1&#34; e &#34;A&#34; tramite le impostazioni locali &#34;en-US&#34; per stabilire se i valori sono uguali.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
