---
title: Comparer.FromCulture
---

# Comparer.FromCulture


## Description

Retorna una funció de comparador basada en la cultura i la sensibilitat de majúscules i minúscules especificades.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Details

Retorna una funció de comparador que utilitza el <code>culture</code> i la sensibilitat de majúscules i minúscules especificada per l'<code>ignoreCase</code> per fer comparacions.<br />      <br />      Una funció de comparador accepta dos arguments i retorna -1, 0 o 1 en funció de si el primer valor és menor, igual o més gran que el segon.<br />      <br />      El valor per defecte de <code>ignoreCase</code> és fals. La <code>culture</code> ha de ser una de les configuracions regionals admeses pel .NET Framework (per exemple, "en-US").    


## Examples

### Example #1 
Compareu &#34;a&#34; i &#34;A&#34; mitjançant la configuració regional &#34;en-US&#34; per determinar si els valors són iguals.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2 
Compareu &#34;a&#34; i &#34;A&#34; mitjançant la configuració regional &#34;en-US&#34; i ignorant l&#39;ús de majúscules i minúscules per determinar si els valors són iguals.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
