---
title: Comparer.FromCulture
---

# Comparer.FromCulture


## Description

Restituisce una funzione dell&#39;operatore di confronto in base alle impostazioni cultura specificate e alla distinzione tra maiuscole e minuscole.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Details

Restituisce una funzione dell'operatore di confronto che utilizza la <code>culture</code> e la distinzione tra maiuscole e minuscole specificata da <code>ignoreCase</code> per eseguire i confronti. <br />      <br />      Una funzione di confronto accetta due argomenti e restituisce -1, 0 o 1 a seconda che il primo valore sia minore, uguale o maggiore del secondo.<br />      <br />      Il valore predefinito per <code>ignoreCase</code> è false. Il <code>culture</code> deve essere una delle impostazioni locali supportate da .NET Framework, ad esempio "it-IT".    


## Examples

### Example #1 
Confronta &#34;a&#34; e &#34;A&#34; tramite le impostazioni locali &#34;en-US&#34; per stabilire se i valori sono uguali.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2 
Confronta &#34;a&#34; e &#34;A&#34; tramite le impostazioni locali &#34;en-US&#34; ignorando la distinzione maiuscole/minuscole per stabilire se i valori sono uguali.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
