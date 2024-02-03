---
title: Comparer.FromCulture
---

# Comparer.FromCulture


## Description

Devuelve una función comparadora basada en la cultura y la distinción entre mayúsculas y minúsculas especificadas.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Details

Devuelve una función comparadora que utiliza la <code>culture</code> y la distinción entre mayúsculas y minúsculas especificada por <code>ignoreCase</code> para realizar las comparaciones..<br />      <br />      Una función comparadora acepta dos argumentos y devuelve -1, 0 o 1 en función de si el primer valor es menor, igual o mayor que el segundo.<br />      <br />      El valor por defecto para <code>ignoreCase</code> es false. El <code>culture</code> debe ser una de las localizaciones soportadas por el framework .NET (por ejemplo, "en-US").    


## Examples

### Example #1 
Compara &#34;a&#34; y &#34;A&#34; usando la configuración regional &#34;en-US&#34; para determinar si los valores son iguales.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2 
Compara &#34;a&#34; y &#34;A&#34; usando la configuración regional &#34;en-US&#34; e ignorando las mayúsculas y minúsculas para determinar si los valores son iguales.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
