---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


## Description

Restituisce una funzione operatore di confronto senza distinzione tra maiuscole e minuscole che usa regole ordinali per confrontare i valori.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Details

Restituisce una funzione di confronto senza distinzione tra maiuscole e minuscole che utilizza regole ordinali per confrontare i valori specificati <code>x</code> e <code>y</code>.<br />        <br />        Una funzione di confronto accetta due argomenti e restituisce -1, 0 o 1 a seconda che il primo valore sia minore, uguale o maggiore del secondo.    


## Examples

### Example #1 
Usando le regole di confronto ordinali senza distinzione tra maiuscole e minuscole, confrontare &#34;Abc&#34; con &#34;abc&#34;. Notare che usando &lt;code&gt;Comparer.Ordinal&lt;/code&gt;&#34;Abc&#34; è minore di &#34;abc&#34;. 
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
