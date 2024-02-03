---
title: Comparer.Ordinal
---

# Comparer.Ordinal


## Description

Restituisce una funzione operatore di confronto che usa regole ordinali per confrontare i valori.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Details

Restituisce una funzione di confronto che utilizza regole ordinali per confrontare i valori specificati <code>x</code> e <code>y</code>.<br />        <br />        Una funzione di confronto accetta due argomenti e restituisce -1, 0 o 1 a seconda che il primo valore sia minore, uguale o maggiore del secondo.    


## Examples

### Example #1 
Tramite le regole ordinali, confronta se &#34;encyclopædia&#34; e &#34;encyclopaedia&#34; sono equivalenti. Si noti che usando &lt;code&gt;Comparer.FromCulture(&#34;en-US&#34;)&lt;/code&gt;, questi sono equivalenti. 
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
