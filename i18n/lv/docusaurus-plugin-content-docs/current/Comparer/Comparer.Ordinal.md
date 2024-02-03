---
title: Comparer.Ordinal
---

# Comparer.Ordinal


## Description

Atgriež salīdzināšanas funkciju, kas izmanto kārtas skaitļa kārtulas, lai salīdzinātu vērtības.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Details

Atgriež salīdzinātāja funkciju, kas izmanto kārtas skaitļu kārtulas, lai salīdzinātu norādītās vērtības <code>x</code> un <code>y</code>.<br />        <br />        Salīdzināšanas funkcija pieņem divus argumentus un atgriež -1, 0 vai 1, balstoties uz to, vai pirmā vērtība ir mazāka, vienāda vai lielāka par otro vērtību.    


## Examples

### Example #1 
Izmantojot kārtas skaitļa kārtulas, salīdziniet, vai vērtības &#34;encyclopædia&#34; un &#34;encyclopaedia&#34; ir vienādas. Ņemiet vērā, ka šīs vērtības ir vienādas, izmantojot &lt;code&gt;Comparer.FromCulture(&#34;en-US&#34;)&lt;/code&gt;. 
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
