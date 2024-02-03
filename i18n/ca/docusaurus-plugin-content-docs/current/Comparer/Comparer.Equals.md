---
title: Comparer.Equals
---

# Comparer.Equals


## Description

Retorna un valor lògic en funció de la comprovació d&#39;igualtat respecte als dos valors proporcionats.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Details

Retorna un valor <code>lògic</code> basat en la comprovació d'igualtat respecte als dos valors proporcionats, <code>x</code> i <code>y</code>, mitjançant el <code>comparer</code>. proporcionat
      <div>        <code>comparer</code> és un <code>Comparador</code> que s'utilitza per controlar la comparació.         Un comparador és una funció que accepta dos arguments i retorna -1, 0 o 1 en funció de si el primer valor es menor, igual o més gran que el segon.        Es poden utilitzar comparadors per fer comparacions sense distinció de majúscules i minúscules o amb detecció de cultura i configuració regional.      </div>      <div>        Els següents comparadors integrats estan disponibles en el llenguatge de fórmules:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: s'utilitza per fer una comparació ordinal exacta.</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: s'utilitza per fer una comparació ordinal exacta sense distinció de majúscules i minúscules.</li>        <li> <code>Comparer.FromCulture</code>: s'utilitza per fer una comparació amb detecció de cultura.</li>      </ul>


## Examples

### Example #1 
Compareu &#34;1&#34; i &#34;A&#34; mitjançant una configuració regional &#34;en-US&#34; per determinar si els valors són iguals.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
