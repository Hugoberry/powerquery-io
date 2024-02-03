---
title: Comparer.Ordinal
---

# Comparer.Ordinal


## Description

Returnează o funcție de comparare care utilizează reguli ordinale pentru a compara valorile.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Details

Returnează o funcție de comparare și care utilizează reguli ordinale pentru a compara valorile furnizate <code>x</code> și <code>y</code>.<br />        <br />        O funcție de comparare acceptă două argumente și returnează -1, 0 sau 1, în funcție dacă prima valoare este mai mică decât, egală cu sau mai mare decât a doua.    


## Examples

### Example #1 
Utilizând reguli ordinale, comparați dacă enciclopædia” și „enciclopedia” sunt echivalente. Rețineți că acestea sunt echivalente utilizând &lt;code&gt;Comparer.FromCulture(&#34;en-US&#34;)&lt;/code&gt;. 
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
