---
title: Comparer.FromCulture
---

# Comparer.FromCulture


## Description

Retourne une fonction de comparaison en fonction de la culture et du respect de la casse spécifiés.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Details

Retourne une fonction de comparaison qui utilise le <code>culture</code> et le respect de la casse spécifiés par <code>ignoreCase</code> pour effectuer des comparaisons.<br />      <br />      Une fonction de comparaison accepte deux arguments et retourne -1, 0 ou 1 selon que la première valeur est inférieure, égale ou supérieure à la seconde.<br />      <br />      La valeur par défaut de <code>ignoreCase</code> est false. Le <code>culture</code> doit être l’un des paramètres régionaux pris en charge par le .NET Framework (par exemple, " fr-FR ").    


## Examples

### Example #1 
Comparez &#34;a&#34; et &#34;A&#34; en utilisant le paramètre régional &#34;en-US&#34; pour déterminer si les valeurs sont égales.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2 
Comparez &#34;a&#34; et &#34;A&#34; en utilisant le paramètre régional &#34;en-US&#34; en ignorant la casse pour déterminer si les valeurs sont égales.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
