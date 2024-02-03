---
title: Comparer.FromCulture
---

# Comparer.FromCulture


## Description

Devolve unha función de comparación baseada na cultura especificada e na distinción entre maiúsculas e minúsculas.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Details

Devolve unha función de comparación que usa o <code>culture</code> e a case-sensibilidade especificada por <code>ignoreCase</code> para realizar comparacións.<br />      <br />      Unha función de comparación acepta dous argumentos e devolucións -1, 0 ou 1 en función de se o primeiro valor é menor, igual ou superior ao segundo.<br />      <br />      O valor por defecto para <code>ignoreCase</code> é falso. O <code>culture</code> debe ser un dos locais apoiados polo marco .NET (por exemplo, "en-US").    


## Examples

### Example #1 
Compare &#34;a&#34; e &#34;A&#34; mediante a configuración rexional &#34;gl-ES&#34; para determinar se os valores son iguais.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2 
Compare &#34;a&#34; e &#34;A&#34; mediante a configuración rexional &#34;gl-ES&#34; ignorando as maiúsculas e minúsculas para determinar se os valores son iguais.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
