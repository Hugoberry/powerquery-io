---
title: Comparer.Ordinal
---

# Comparer.Ordinal


## Description

Gibt eine Vergleichsfunktion zurück, die Aufzählungsregeln für den Vergleich von Werten verwendet.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Details

Gibt eine Vergleichsfunktion zurück, die Ordinalregeln verwendet, um die angegebenen Werte <code>x</code> und <code>y</code> zu vergleichen.<br />        <br />        Eine Vergleichsfunktion akzeptiert zwei Argumente und gibt -1, 0 oder 1 zurück, je nachdem, ob der erste Wert im Vergleich zum zweiten kleiner, gleich oder größer ist.    


## Examples

### Example #1 
Vergleichen Sie mithilfe von Aufzählungsregeln, ob &#34;encyclopædia&#34; und &#34;encyclopaedia&#34; äquivalent sind. Beachten Sie, dass sie bei Verwendung von &lt;code&gt;Comparer.FromCulture(&#34;en-US&#34;)&lt;/code&gt; äquivalent sind. 
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
