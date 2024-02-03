---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


## Description

Atgriež salīdzināšanas funkciju, kura nav reģistrjutīga un kura norādīto vērtību salīdzināšanai izmanto kārtas kārtulas.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Details

Atgriež reģistrnejutīgu salīdzinātāja funkciju, kas izmanto kārtas skaitļu kārtulas, lai salīdzinātu norādītās vērtības <code>x</code> un <code>y</code>.<br />        <br />        Salīdzināšanas funkcija pieņem divus argumentus un atgriež -1, 0 vai 1, balstoties uz to, vai pirmā vērtība ir mazāka, vienāda vai lielāka par otro vērtību.    


## Examples

### Example #1 
Izmantojot kārtas kārtulas, kas nav reģistrjutīgas, salīdzina &#34;Abc&#34; un &#34;abc&#34;. Izmantojot &lt;code&gt;Comparer.Ordinal&lt;/code&gt;, &#34;Abc&#34; ir mazāks nekā &#34;abc&#34;.
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
