---
title: Duration.From
---

# Duration.From


Crea un elemento duration dal valore specificato.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Restituisce un valore <code>durata</code> dall'elemento <code>value</code> specificato. Se l'elemento specificato <code>value</code> è <code>null</code>, <code>Duration.From</code> restituisce <code>null</code>.  Se l'elemento specificato <code>value</code> è <code>durata</code>, viene restituito <code>value</code>. I valori dei tipi seguenti possono essere convertiti in un valore <code>durata</code>:      <ul>        <li><code>testo</code>: valore <code>durata</code> da rappresentazioni testuali in formato di tempo trascorso (d.h:m:s). Per informazioni, vedere <code>Duration.FromText</code>.</li>        <li><code>numero</code>: elemento <code>durata</code> equivalente al numero di giorni interi e frazionari espressi da <code>value</code>.</li>      </ul>Se <code>value</code> è di altro tipo, viene restituito un errore.


## Examples

### Example #1 
Converte &lt;code&gt;2.525&lt;/code&gt; in un valore &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
